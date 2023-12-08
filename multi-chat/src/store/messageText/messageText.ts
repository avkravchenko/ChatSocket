import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  message: string;
  updateMessage: (string) => void;
};

const useMessageStore = create<State>()(
  persist(
    (set) => ({
      message: "",
      updateMessage: (data) => set(() => ({ message: data })),
    }),
    {
      name: "message-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useMessageStore;
