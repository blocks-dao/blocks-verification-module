import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const logo = "../../assets/blocks.png"
declare const window: any;

const Home: React.FC = () => {
  const history = useHistory();

  const onVerify = () => {
    history.replace("/verify");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
            <img className="logo" src={logo} />
          </IonTitle>
          <IonButton size="small" className="btn" color="danger" slot="end" onClick={onVerify}>Verify</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
