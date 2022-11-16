import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./Pages.css";
import "./Measure.css";

const Measure: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className={"ion-no-border ion-padding"}>
        <h1>Measure</h1>
      </IonHeader>
      <IonContent fullscreen class="ion-padding"></IonContent>
    </IonPage>
  );
};

export default Measure;
