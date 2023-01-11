import { useState, Fragment } from "react";
// Ionic
import {
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonCardContent,
} from "@ionic/react";
// Types
import { UserProfile } from "../types";

function ProfileCreate() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  return (
    <IonCard>
      <IonCardContent>
        <IonList lines="none" className="ion-padding" style={{borderRadius: "10px"}}>
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
        <IonGrid className="ion-padding-vertical" color="">
          <IonRow className="ion-justify-content-between">
            <IonCol className="ion-no-padding">
              <IonButton className="" color="secondary">
                Save
              </IonButton>
              <IonButton className="ion-padding-horizontal" color="tertiary">
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
}

export default ProfileCreate;
