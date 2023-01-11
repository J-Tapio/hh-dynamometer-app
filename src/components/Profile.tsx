// Ionic
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
// Ionic Icons
import { informationCircle } from "ionicons/icons";
//============================================================================//

function MeasurementRecord() {
  return (
    <IonItem className="">
      <IonLabel className="ion-padding-vertical">
        <IonText className="">Measurement Date</IonText>
      </IonLabel>
      <IonButton slot="end" color="tertiary">
        <IonIcon icon={informationCircle} size="" />
      </IonButton>
    </IonItem>
  );
}

let exampleRecords = Array.apply(null, Array(10));

function Profile() {
  return (
    <IonCard color="" className="">
      <IonCardHeader>
        <IonCardSubtitle>Profile</IonCardSubtitle>
        <IonCardTitle>Full Name</IonCardTitle>
        <IonCardSubtitle>
          <h6>email@example.com</h6>
        </IonCardSubtitle>
        <IonCardSubtitle>
          <h6>+331231231</h6>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className="" style={{ background: "" }}>
        <IonList style={{ borderRadius: "10px" }}>
          <IonItem className="">
            <IonLabel className="ion-padding-vertical">
              Measurement Records
            </IonLabel>
          </IonItem>
          {exampleRecords.map((item, index) => (
            <MeasurementRecord key={index} />
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}

export default Profile;
