import { create } from 'zustand';

interface AudioState {
  isPlaying: boolean;
  toggleAudio: () => void;
  setPlaying: (status: boolean) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: false, // Default mati
  toggleAudio: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaying: (status: boolean) => set({ isPlaying: status }),
}));