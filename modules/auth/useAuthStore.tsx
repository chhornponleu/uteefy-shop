import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export { useAuthStore };

type Data = {
    token?: string | null;
}

const initialState: Data = {
    token: null,
}

type Store = {
    data: Data;
    setToken: (token: string) => void;
}

const useAuthStore = create(
    persist<Store>(
        (set, get) => ({
            data: initialState,
            setToken: (token: string) => set({ data: { ...(get().data || {}), token } }),
        }), {
        name: 'fish-store',
        storage: createJSONStorage(() => AsyncStorage),
    })
);


