import { useState } from "react";
// Zustand
import useStore from "../store";
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
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonNote,
  IonText,
  IonSpinner,
} from "@ionic/react";
// Types
import { ParticipantProfile } from "../store";
//============================================================================//

function ProfileCreate() {
  const { setProfile } = useStore((state) => state);
  const [createdProfile, setCreatedProfile] = useState<ParticipantProfile>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isTouched, setIsTouched] = useState(false);
  const [isFnameValid, setIsFnameValid] = useState<boolean>();
  const [isLnameValid, setIsLnameValid] = useState<boolean>();
  const [isEmailValid, setIsEmailValid] = useState<boolean>();
  const [isSavingProfile, setIsSavingProfile] = useState<boolean>(false);

  function validateName(ev: Event, nameType: "first" | "last") {
    const providedValue = (ev.target as HTMLInputElement).value;

    if (nameType === "first") {
      setCreatedProfile((prevInfo) => {
        return {
          ...prevInfo,
          firstName: providedValue,
        };
      });
    }

    if (nameType === "last") {
      setCreatedProfile((prevInfo) => {
        return {
          ...prevInfo,
          lastName: providedValue,
        };
      });
    }

    if (providedValue.match(/^[a-zA-Z-]{2,15}$/) !== null) {
      if (nameType === "first") {
        setIsFnameValid(true);
      }
      if (nameType === "last") {
        setIsLnameValid(true);
      }
    } else {
      nameType === "first" ? setIsFnameValid(false) : setIsLnameValid(false);
    }
  }

  function validateEmail(ev: Event) {
    const providedValue = (ev.target as HTMLInputElement).value;

    setCreatedProfile((prevInfo) => {
      return { ...prevInfo, email: providedValue.toLowerCase() };
    });

    if (
      providedValue.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      ) !== null
    ) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }

  //function markTouched() {
  //  setIsTouched(true);
  //}

  function handleSave() {
    setIsSavingProfile(true);
    resetForm();
  }

  function resetForm() {
    setCreatedProfile({ firstName: "", lastName: "", email: "" });
    setIsFnameValid(undefined);
    setIsLnameValid(undefined);
    setIsEmailValid(undefined);
  }

  if (isSavingProfile) {
    return (
      <IonCard>
        <IonCardContent>
          <IonText className="ion-text-center">
            <h1>Saving Profile</h1>
          </IonText>
          <div className="ion-text-center ion-margin-vertical">
            <IonSpinner name="lines-sharp" color="primary" />
          </div>
        </IonCardContent>
      </IonCard>
    );
  } else {
    return (
      <IonCard>
        <IonCardContent>
          <IonList lines="none" className="" style={{ borderRadius: "10px" }}>
            <IonCardTitle>Create Profile</IonCardTitle>
            <IonCardSubtitle>Fill in the fields</IonCardSubtitle>
            <IonItem
              className={`${isFnameValid && "ion-valid"} ${
                isFnameValid === false && "ion-invalid"
              }`}
            >
              <IonLabel position="stacked">First name</IonLabel>
              <IonInput
                debounce={400}
                placeholder="First name"
                onIonInput={(event) => validateName(event, "first")}
                value={createdProfile.firstName}
              ></IonInput>
              <IonNote slot="error">Enter first name</IonNote>
            </IonItem>
            <IonItem
              className={`${isLnameValid && "ion-valid"} ${
                isLnameValid === false && "ion-invalid"
              }`}
            >
              <IonLabel position="stacked">Last name</IonLabel>
              <IonInput
                placeholder="Last name"
                debounce={400}
                onIonInput={(event) => validateName(event, "last")}
                value={createdProfile.lastName}
              ></IonInput>
              <IonNote slot="error">Enter last name</IonNote>
            </IonItem>
            <IonItem
              className={`${isEmailValid && "ion-valid"} ${
                isEmailValid === false && "ion-invalid"
              } ${isTouched && "ion-touched"}`}
            >
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                placeholder="email@example.com"
                type="email"
                debounce={400}
                onIonInput={(event) => validateEmail(event)}
                //onIonBlur={() => markTouched()}
                value={createdProfile.email}
              ></IonInput>
              <IonNote slot="helper">Enter a valid email</IonNote>
              <IonNote slot="error">Invalid email</IonNote>
            </IonItem>
          </IonList>
          <IonGrid className="ion-padding-vertical" color="">
            <IonRow className="ion-justify-content-between">
              <IonCol className="ion-no-padding">
                <IonButton
                  className=""
                  color="secondary"
                  disabled={
                    isFnameValid && isLnameValid && isEmailValid ? false : true
                  }
                  onClick={() => handleSave()}
                >
                  Save
                </IonButton>
                <IonButton
                  className="ion-padding-horizontal"
                  color="tertiary"
                  onClick={() => resetForm()}
                >
                  Reset
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default ProfileCreate;
