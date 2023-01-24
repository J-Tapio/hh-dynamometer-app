import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, search, create } from "ionicons/icons";
// Zustand
import useStore from "../store";
// Types
import { RevealOptions } from "../types";
//============================================================================//

type ToolrowProps = {
  setReveal: React.Dispatch<React.SetStateAction<RevealOptions>>;
};

function ToolRow({ setReveal }: ToolrowProps) {
  const {profile} = useStore((state) => state)

  return (
    <IonFab horizontal="center" vertical="bottom" className="ion-padding-bottom">
      <IonFabButton onClick={() => setReveal(null)}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton color="tertiary" onClick={() => setReveal("search")}>
          <IonIcon icon={search}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="end">
        <IonFabButton color="tertiary" onClick={() => setReveal("create")}>
          <IonIcon icon={create}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}

export default ToolRow;
