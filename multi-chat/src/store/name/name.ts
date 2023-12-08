import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  username: string;
  id: string;
  updateName: (data: string) => void;
};

const useName = create<State>()(
  persist(
    (set) => ({
      username: "",
      id: crypto.randomUUID(),
      updateName: (data) => set(() => ({ username: data })),
    }),
    {
      name: "name-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useName;
