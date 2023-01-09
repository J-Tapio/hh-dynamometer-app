//TODO: Define types for next and error function parameters
// Not defined within BLE package/plugin

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
  ms: number;
  mv: string;
};
