import { create } from "zustand";

type Store = {
  en: boolean;
  toggleLan: () => void;
};

const useStore = create<Store>()((set) => ({
  en: false,
  toggleLan: () => set((state) => ({ en: !state.en })),
}));

export default useStore;
