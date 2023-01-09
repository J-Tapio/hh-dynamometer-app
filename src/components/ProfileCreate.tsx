import { useState, Fragment } from "react";
// Ionic
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonText,
} from "@ionic/react";
// Types
import { UserProfile } from "../types";

function ProfileCreate() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  return (
    <Fragment>
      <IonList lines="none" className="ion-padding">
        <IonText className="" style={{ fontSize: "1.4rem" }}>
          Create Profile
        </IonText>
        <IonItem>
          <IonLabel position="stacked">First name</IonLabel>
          <IonInput placeholder="First name"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Last name</IonLabel>
          <IonInput placeholder="Last name"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput placeholder="email@example.com" type="email"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Phone</IonLabel>
          <IonInput placeholder="040-1231231" type="tel"></IonInput>
        </IonItem>
      </IonList>
      <IonGrid className="ion-padding">
        <IonRow className="ion-justify-content-between">
          <IonCol className="">
            <IonButton className="" color="secondary">
              Save
            </IonButton>
            <IonButton className="ion-padding-horizontal" color="tertiary">
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Fragment>
  );
}

export default ProfileCreate;
