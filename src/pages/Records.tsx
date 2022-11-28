import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonList,
  IonItem,
  IonText,
} from "@ionic/react";
import "./Pages.css";
import "./Records.css";

const Records: React.FC = () => {
  const exampleParticipants = [
    "Davis",
    "Millner",
    "Blair",
    "Danielsson",
    "Gordon",
  ];
  let [query, setQuery] = useState<string>("");
  let [results, setResults] = useState<string[]>(exampleParticipants);

  const handleChange = (ev: Event) => {
    const target = ev.target as HTMLIonSearchbarElement;
    if (target && target.value && target.value.length >= 2) {
      setQuery(target.value.toLowerCase());
      setResults(
        exampleParticipants.filter(
          (participant) => participant.toLowerCase().indexOf(query) > -1
        )
      );
    } else {
      setResults(exampleParticipants);
      return;
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-margin-top">
        <IonText color="secondary">
          <h1>Records</h1>
        </IonText>
        <IonSearchbar
          showCancelButton="focus"
          placeholder="Search by participant"
          debounce={200}
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>
        <IonList>
          {results.map((result) => (
            <IonItem key={result}>{result}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Records;
