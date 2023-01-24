import { useState } from "react";
// Ionic
import { IonButton, IonContent, IonPage, IonText } from "@ionic/react";
// Components
import ProfileSearch from "../components/ProfileSearch";
import Profile from "../components/Profile";
import ProfileCreate from "../components/ProfileCreate";
import DateRecords from "../components/DateRecords";
import ToolRow from "../components/ToolRow";
// Types
import { RevealOptions } from "../types";
// Zustand
import useStore from "../store";
//============================================================================//

function Records() {
  const { profile } = useStore((state) => state);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [reveal, setReveal] = useState<RevealOptions>(null);

  if (profile) {
    return (
      <IonPage>
        <IonContent className="">
          <IonText color="">
            <h1 className="ion-text-center ion-padding">Records</h1>
          </IonText>
          {reveal === "search" && <ProfileSearch />}
          {reveal === "create" && <ProfileCreate />}
          {!selectedDate && <Profile setSelectedDate={setSelectedDate} />}
          {selectedDate && (
            <>
              <DateRecords date={selectedDate} />
              <IonButton
                className="ion-margin"
                expand="full"
                shape="round"
                onClick={() => setSelectedDate(null)}
              >
                Close
              </IonButton>
            </>
          )}
        </IonContent>
        <ToolRow setReveal={setReveal} />
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <IonContent className="">
          <IonText color="">
            <h1 className="ion-text-center ion-padding">Records</h1>
          </IonText>
          {reveal === "search" && <ProfileSearch />}
          {reveal === "create" && <ProfileCreate />}
        </IonContent>
        <ToolRow setReveal={setReveal} />
      </IonPage>
    );
  }
}

export default Records;
