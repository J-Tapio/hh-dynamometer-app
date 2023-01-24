import { useState } from "react";
// Ionic
import {
  IonSearchbar,
  IonList,
  IonItem,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
// Zustand
import useStore from "../store";
//============================================================================//
const exampleParticipants = [
  "Davis",
  "Millner",
  "Blair",
  "Danielsson",
  "Gordon",
];

const exampleProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "example@example.com",
};

function ProfileSearch() {
  let { setProfile } = useStore((state) => state);
  let [query, setQuery] = useState<string>("");
  let [results, setResults] = useState<string[]>(exampleParticipants);

  function handleChange(ev: Event) {
    const target = ev.target as HTMLIonSearchbarElement;
    if (target.value && target.value.length >= 2) {
      setQuery(target.value.toLowerCase());
      setResults(
        exampleParticipants.filter(
          (participant) => participant.toLowerCase().indexOf(query) !== -1
        )
      );
    } else {
      setResults(exampleParticipants);
    }
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Search</IonCardSubtitle>
        <IonCardTitle>Search by name</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonSearchbar
          color={"light"}
          className="ion-no-padding"
          showCancelButton="focus"
          placeholder=""
          debounce={200}
          onIonChange={(ev) => handleChange(ev)}
        />
        <IonList className="ion-no-padding" style={{ borderRadius: "10px" }}>
          {results.map((result) => (
            <IonItem className="search__item" key={result} onClick={() => setProfile(exampleProfile)}>
              <IonText>{result}</IonText>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}

export default ProfileSearch;
