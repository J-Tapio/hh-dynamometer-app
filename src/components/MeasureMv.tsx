import { Fragment, useCallback, useEffect, useState } from "react";
// Ionic
import {
  IonText,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonSpinner,
  IonCard,
  IonCardContent,
} from "@ionic/react";
// BLE
import { BLE } from "@awesome-cordova-plugins/ble";
// Types
import { BLEObserver, PlotData } from "../types/measure";
//============================================================================//

type MeasureMvProps = {
  setPlotData: React.Dispatch<React.SetStateAction<PlotData[]>>;
  setPlotMeasured: React.Dispatch<React.SetStateAction<boolean>>;
};
// Component used for testing purposes to see millivoltage measurements
// Used before calibration
function MeasureMv({ setPlotData, setPlotMeasured }: MeasureMvProps) {
  const [address, setAddress] = useState<string | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [weight, setWeight] = useState<string>("0");
  const [startMeasure, setStartMeasure] = useState<boolean>(false);
  const [measurementTime, setMeasurementTime] = useState<number>(0);

  const weightService = "61a3d4f5-07d0-4e48-8b74-694c0aa75817";
  const commandCharacteristic = "7f00ad55-07d0-4e48-8b74-694c0aa75817";
  const measureCharacteristic = "bca0f0d3-07d0-4e48-8b74-694c0aa75817";

  const measureW = useCallback(
    function () {
      if (address) {
        BLE.read(address, weightService, measureCharacteristic)
          .then((data) => {
            let val = new Float32Array(data).at(0) as number;
            setWeight(val.toFixed(2)); // String
            //setPlotData((prevArr) => [...prevArr, val.toFixed(2)]);
            setPlotData((prevPlotData) => {
              if (prevPlotData.length < 1) {
                return [
                  ...prevPlotData,
                  { ms: 0, mv: "0" },
                  { ms: measurementTime, mv: val.toFixed(2) },
                ];
              } else {
                return [
                  ...prevPlotData,
                  { ms: measurementTime, mv: val.toFixed(2) },
                ];
              }
            });
            setMeasurementTime(
              (prevMeasurementTime) => prevMeasurementTime + 200
            );
          })
          .catch((err) => {
            //TODO: Graceful error-out within UI
            console.error(err);
          });
      }
    },
    [address, setPlotData, measurementTime]
  );

  function sendCmd(address: string, startMeasure: boolean) {
    let command: ArrayBufferLike = new Int8Array([startMeasure ? 1 : 0]).buffer;
    BLE.write(address, weightService, commandCharacteristic, command).catch(
      (err) => {
        //TODO: Re-connect? Error usually 'service not found'.
        setAddress(null);
        setConnected(false);
        console.error(err);
      }
    );
  }

  const handleStart = () => {
    if (address) {
      setPlotData([]);
      sendCmd(address, true);
      setPlotMeasured(false);
      setStartMeasure(true);
    }
  };
  const handleStop = () => {
    if (address) {
      sendCmd(address, false);
      setStartMeasure(false);
      setPlotMeasured(true);
      setMeasurementTime(0);
      setWeight("0");
      //setPlotDate([])
    }
  };

  useEffect(() => {
    let scanObserver: BLEObserver = {
      next(device) {
        //console.log(device); //Device & Services info
        if (device.name === "HH-D") {
          setAddress((currAddr) =>
            currAddr === device.id ? currAddr : device.id
          );
        }
      },
      error(e: any) {
        console.error(e);
        setAddress(null);
      },
      complete() {
        console.log("Scan request complete");
      },
    };

    let connectObserver: BLEObserver = {
      next(device) {
        //console.log(device); //Device info
        if (device.name === "HH-D") {
          setConnected(true);
        }
      },
      error(e: any) {
        //console.error(e);
        setConnected(false);
        setAddress(null);
      },
      complete(): void {
        console.log("Connection request complete");
      },
    };

    if (!address) {
      BLE.scan([weightService], 30).subscribe(scanObserver);
    } else {
      BLE.connect(address).subscribe(connectObserver);
    }
  }, [address, connected]);

  useEffect(() => {
    if (startMeasure) {
      let weightInterval = setInterval(measureW, 200);
      return () => {
        clearInterval(weightInterval);
      };
    }
  }, [startMeasure, measureW]);

  return (
    <Fragment>
      {!address && !connected && (
        <IonGrid fixed={true}>
          <IonRow className="">
            <IonCol size="6" push="0.5" className="">
              <IonText>
                <h4>Connecting with device...</h4>
              </IonText>
            </IonCol>
            <IonCol size="4" className="ion-align-self-center">
              <IonSpinner name="lines-sharp" color="primary" />
            </IonCol>
          </IonRow>
        </IonGrid>
      )}
      {address && connected && (
        <Fragment>
          <IonCard>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonText color="success">
                      <p className="mvcard__result">
                        {"Millivoltage: " + weight}
                      </p>
                    </IonText>
                    <IonText>
                      <p className="mvcard__p">
                        {"Device Address: " + address}
                      </p>
                      <p className="mvcard__p">{"Connected: " + connected}</p>
                      <p className="mvcard__p">{"Measure: " + startMeasure}</p>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid fixed={true}>
                <IonRow>
                  <IonCol size={"5"}>
                    <IonButton
                      color="tertiary"
                      style={{ width: "100%" }}
                      onClick={handleStart}
                    >
                      Start
                    </IonButton>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonCol size={"5"}>
                    <IonButton
                      color="danger"
                      style={{ width: "100%" }}
                      onClick={handleStop}
                    >
                      Stop
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </Fragment>
      )}
    </Fragment>
  );
}

export default MeasureMv;
