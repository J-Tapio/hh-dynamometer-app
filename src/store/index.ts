import { create } from 'zustand';

export type ParticipantProfile = {
  firstName: string;
  lastName: string;
  email: string;
  history?: MeasurementRecord[]; // Naming?
}

type MeasurementRecord = {
  date: string;
  data: Measurement[];
};

type Measurement = {
  movement: string;
  maxOutput: number;
  plotData: PlotData[];
}

type PlotData = {
  ms: number;
  mv: string;
}


interface AppState {
  profile: null | ParticipantProfile;
  setProfile: (selectedProfile: ParticipantProfile) => void
}

const useStore = create<AppState>()((set) => ({
  profile: null,
  setProfile: (selectedProfile: ParticipantProfile) => set((state) => ({profile: selectedProfile}))
}))

export default useStore;