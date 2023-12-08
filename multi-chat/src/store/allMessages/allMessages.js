import dayjs from "dayjs";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAllMessages = create(
  persist(
    (set, get) => ({
      allMessages: [],
      sort: false,
      updateSort: () => {
        set((state) => ({
          sort: !state.sort,
        }));
      },
      sortMessages: () => {
        set((state) => ({
          allMessages: [...state.allMessages].sort((a, b) => {
            const dateA = dayjs(a.date);
            const dateB = dayjs(b.date);
            return state.sort ? dateB.diff(dateA) : dateA.diff(dateB);
          }),
        }));
      },
      addMessage: (message) =>
        set((state) => ({
          allMessages: [...state.allMessages, message],
        })),
    }),
    {
      name: "name-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAllMessages;
