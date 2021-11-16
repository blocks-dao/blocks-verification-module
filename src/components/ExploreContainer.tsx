import React, { useState, useRef, useEffect } from 'react';
import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import {ethers} from "ethers";
import BigNumber from "bignumber.js";
import * as md5 from "js-md5";
import * as web3Utils from "web3-utils";
import blocksData from "../blocksDetails";

declare const window: any;

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const [file, setFile] = useState("");
  const [viewHash, setHash] = useState("");
  const [viewFile, setViewFile] = useState("");
  
  const onChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setViewFile(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
    }
  }

  const fileInput = useRef<any>(null)

  const uploadToBlocks = async (data: any) =>{
    
    const formData: any = new FormData();
    formData.append('file', data);
    console.log(formData);
    const hash = await md5(new Uint8Array([formData]));
    console.log(hash);
    localStorage.setItem('hash', hash);
    setHash(hash);
    //Make a hash of our file and send to BLOCKS
    blocksDataTransaction(hash);
  }

  const blocksDataTransaction = (fileData: any) => {

      //Connect to Ethereum through the Metamask Provider
      let provider: any;
      provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Connect to the BLOCKS Smart Contract via the contract address, abi and provider
      const contract = new ethers.Contract(blocksData.blocksAddress, blocksData.blocksAbi, provider);
      let contractSigner = contract.connect(signer);

      //For xDAI Network use: blocksData.blocksXdaiAddress ^.
      //For Polygon Network use: blocksData.blocksPolygonAddress ^.


      //Define the data you want to insert on-chain and convert to hex
      let dataConverted = web3Utils.toHex(fileData);

      //You can send any amount of BLOCKS tokens with the transaction. BigNumber helps JavaScript deal with large numbers involving BLOCKS' 18 decimals. In this case we are sending 2 BLOCKS.
      let amount = new BigNumber(2000000000000000000);
      console.log(amount.toFixed())

      //Now you can call the "send" function by entering a receiving address, amount and the converted data.
      let receivingAddress = "0xf0e3ea754D038b979CD0124e2f1A4Bf44f32746a"
      contractSigner.send(receivingAddress, amount.toFixed(), dataConverted).then((tx: any)=>{
        if(tx){
          //View the transaction response and get the transaction hash
          console.log(tx)
          alert(tx.hash);
        }
      }).catch((e: any) => {
        alert(e.message);
        setFile("");
        setViewFile("")
      });
  }

  useEffect(() => {
    if (window.ethereum ) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
      .then((res:any) => {
        console.log(res[0]);
      })
      .catch((error: any) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          alert('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      });
    }
    if(file){
      uploadToBlocks(file);
    }
  }, [file]);

  return (
      <div className="container">
        <strong>Asset Verification Module</strong>
        <input
          type='file'
          name='image'
          ref={fileInput}
          onChange={onChange}
          style={{ display: 'none' }}
        />
        <IonButton
          className="button-choose"
          color="danger"
          onClick={() => fileInput.current?.click()}>Choose File</IonButton>
        {file && viewFile &&
          <>
            <p>Stored Hash: {viewHash}</p>
            <img className="upload-image" src={viewFile} />
          </>
        }
      </div>  
  );
};

export default ExploreContainer;
