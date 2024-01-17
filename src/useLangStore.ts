import { create } from "zustand";

type Store = {
  en: boolean;
  toggleLan: () => void;
};

const useStore = create<Store>()((set) => ({
  en: true,
  toggleLan: () => set((state) => ({ en: !state.en })),
}));

export default useStore;
