// Ionic
import { IonContent, IonPage, IonText } from "@ionic/react";
// Components
import ProfileSearch from "../components/ProfileSearch";
//============================================================================//

function Records() {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="">
          <h1 className="ion-text-center ion-padding">Records</h1>
        </IonText>
        <ProfileSearch />
      </IonContent>
    </IonPage>
  );
}

export default Records;
