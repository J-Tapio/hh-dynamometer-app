//TODO: Define types for next and error function parameters
// Not being defined within BLE package

type ScanData = {
  name: string;
  id: string;
  advertising: ArrayBuffer[];
  rssi: number;
};

export type BLEObserver = {
  closed?: boolean;
  next: (value: ScanData) => void;
  error: (err: any) => void;
  complete: () => void;
};

export type PlotData = {
  name: number;
  mv: string;
};
