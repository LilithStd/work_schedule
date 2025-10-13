import {create} from 'zustand';

interface GlobalStoreTypes {
	modalOpenStatus: boolean;
	setModalOpenStatus: (status: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreTypes>()((set) => ({
	modalOpenStatus: false,
	setModalOpenStatus: (status) => set(() => ({modalOpenStatus: status})),
}));
