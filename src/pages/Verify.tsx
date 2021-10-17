import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import VerifyContainer from '../components/VerifyContainer';
import './Verify.css';
const logo = "../../assets/blocks.png"
declare const window: any;

const Verify: React.FC = () => {
    const history = useHistory();

    const onHome = () => {
        history.replace("/home");
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
            <img className="logo" src={logo} />
          </IonTitle>
          <IonButton size="small" color="danger" className="btn" slot="end" onClick={onHome}>Home</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" fullscreen>
        <VerifyContainer />
      </IonContent>
    </IonPage>
  );
};

export default Verify;