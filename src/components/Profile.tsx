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
} from "@ionic/react";
// IonIcons
import { informationCircle } from "ionicons/icons";
//============================================================================//

const exampleDates = [
  "1.1.2022",
  "3.2.2022",
  "5.5.2022",
  "6.7.2022",
  "11.11.2022",
];

type MeasurementRecordProps = {
  measurementDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string | null>>;
};

function MeasurementRecord({
  measurementDate,
  setSelectedDate,
}: MeasurementRecordProps) {
  return (
    <IonItem className="">
      <h3>{measurementDate}</h3>
      <IonButton
        slot="end"
        color="tertiary"
        onClick={() => setSelectedDate(measurementDate)}
      >
        <IonIcon icon={informationCircle} />
      </IonButton>
    </IonItem>
  );
}

//----------------------------------------------------------------------------//

type ProfileProps = {
  setSelectedDate: React.Dispatch<React.SetStateAction<string | null>>;
};

function Profile({ setSelectedDate }: ProfileProps) {
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
      <IonCardContent className="ion-no-padding">
        <IonList lines="full">
          <IonItem className="">
            <IonLabel className="ion-padding-vertical">
              Measurement Records
            </IonLabel>
          </IonItem>
          {exampleDates.map((item, index) => (
            <MeasurementRecord
              key={index}
              measurementDate={item}
              setSelectedDate={setSelectedDate}
            />
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}

export default Profile;
