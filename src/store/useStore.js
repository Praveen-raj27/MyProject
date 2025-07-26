import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const  useCounterStore = create(
    devtools(
        (set) => ({
            count: 0,
            // increase: () => set((state) => ({ count: state.count + 1 })),
            // decrease: () => set((state) => ({ count: state.count - 1 })),
             increase: () =>
      set((state) => {
        const newCount = state.count + 1;
        localStorage.setItem('count', newCount); // 👈 manually save
        return { count: newCount };
      }),
    decrease: () =>
      set((state) => {
        const newCount = state.count - 1;
        localStorage.setItem('count', newCount);
        return { count: newCount };
      }),
            reset: () => set({ count: 0 }),
        }),
        // {
        //     name: 'counter-storage', // unique name for the storage
        //     getStorage: () => localStorage, // use localStorage as the storage
        // }
    )
        
);
const savedCount = localStorage.getItem('counter-storage/count');
if (savedCount !== null) {
  useCounterStore.setState({ count: parseInt(savedCount, 10) });
}

useCounterStore.subscribe(
  (count) => {
    console.log('🔄 Count changed:', count);
  },
  (state) => state.count // 👈 only subscribe to the `count` slice
);

export const useUpdateUser = create(
  persist(
    devtools(
      (set) => ({
        userDetails: {
          userName: "",
          email: "",
        },
        updateUserDetails: ({ userName, email }) =>
          set(() => ({
            userDetails: { userName, email },
          })),
        resetUserDetails: () =>
          set(() => ({
            userDetails: { userName: "", email: "" },
          })),
      })),
      {
        name: "user-storage", // unique name for the storage
        getStorage: () => localStorage, // use localStorage as the storage
      }
  )
);