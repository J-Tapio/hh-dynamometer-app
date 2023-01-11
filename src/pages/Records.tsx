// Ionic
import { IonContent, IonPage, IonText } from "@ionic/react";
// Components
import ProfileSearch from "../components/ProfileSearch";
import Profile from "../components/Profile";
//============================================================================//

function Records() {
  return (
    <IonPage>
      <IonContent className="">
        <IonText color="">
          <h1 className="ion-text-center ion-padding">Records</h1>
        </IonText>
        <ProfileSearch />
        <Profile />
      </IonContent>
    </IonPage>
  );
}

export default Records;
