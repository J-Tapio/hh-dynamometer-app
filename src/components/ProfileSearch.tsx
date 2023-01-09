import { Fragment, useState } from "react";
// Ionic
import { IonSearchbar, IonList, IonItem, IonText } from "@ionic/react";
//============================================================================//
const exampleParticipants = [
  "Davis",
  "Millner",
  "Blair",
  "Danielsson",
  "Gordon",
];

function ProfileSearch() {
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
    <Fragment>
      <IonSearchbar
        showCancelButton="focus"
        placeholder="Search for participant"
        debounce={200}
        onIonChange={(ev) => handleChange(ev)}
      />
      <IonList lines="none">
        {results.map((result) => (
          <IonItem key={result}>
            <IonText>{result}</IonText>
          </IonItem>
        ))}
      </IonList>
    </Fragment>
  );
}

export default ProfileSearch;
