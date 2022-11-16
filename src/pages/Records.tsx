import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonList,
  IonItem,
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
    }
    setResults(
      exampleParticipants.filter(
        (participant) => participant.toLowerCase().indexOf(query) > -1
      )
    );
  };

  return (
    <IonPage>
      <IonHeader className={"ion-no-border ion-padding"}>
        <h1>Records</h1>
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
      </IonHeader>
      <IonContent fullscreen class="ion-padding"></IonContent>
    </IonPage>
  );
};

export default Records;
