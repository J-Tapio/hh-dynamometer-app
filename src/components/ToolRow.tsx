import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, search, create } from "ionicons/icons";
// Types
import { RevealOptions } from "../types";
//============================================================================//

type ToolrowProps = {
  setReveal: React.Dispatch<React.SetStateAction<RevealOptions>>;
};

function ToolRow({ setReveal }: ToolrowProps) {
  return (
    <IonFab slot="fixed" horizontal="center" vertical="bottom" className="ion-padding-bottom">
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton color="tertiary" onClick={() => setReveal("search")}>
          <IonIcon icon={search}></IonIcon>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="end">
        {/*  <IonFabButton color="secondary">
          <IonIcon icon={globe}></IonIcon>
        </IonFabButton> */}
        <IonFabButton color="tertiary" onClick={() => setReveal("add")}>
          <IonIcon icon={create}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}

export default ToolRow;
