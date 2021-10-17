# BLOCKS Metadata Module

This proof of concept application creates a unique hash for uploaded files. This hash is stored in local storage and immutably on BLOCKS. The hashes can be compared to determine authenticity or modifications to a file.

# Use Cases for BLOCKS Metadata Transactions

- Data security and verification tools
- Immutable data storage

## Project Notes:
- Project is set up for ETH mainnet
- Metamask is used as the provider to sign transactions
- Infura is used to connect to ETH for fetching/parsing data 
(manually change the Infura url for Rinkeby testing from "mainnet.infura.io" to "rinkeby.infura.io"

## Live Demo

[BLOCKS Verification Web App](https://blocks-verification.web.app/home)

## Running Locally
The app is built with ReactJs and Ionic Framework
```
npm install -g @ionic/cli
```
[Install the Ionic CLI](https://ionicframework.com/docs/cli/)

Clone the repo and run:
```
npm install
```
Start the app using:
```
ionic serve
```

## Have Fun

Have fun exploring and building verification tools with BLOCKS.


## License

Copyright © 2021 <BLOCKS DAO, LLC>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.