import {create} from 'zustand';
type modalOpenStatusType = {
	status: boolean;
	id: string;
};

interface GlobalStoreTypes {
	modalOpenStatus: {
		status: boolean;
		id: string;
	};
	setModalOpenStatus: (status: modalOpenStatusType) => void;
	resetSetOpenStatus: () => void;
}

export const useGlobalStore = create<GlobalStoreTypes>()((set, get) => ({
	modalOpenStatus: {
		status: false,
		id: '',
	},
	setModalOpenStatus: (status) => {
		if (!get().modalOpenStatus.status) {
			set(() => ({
				modalOpenStatus: {status: true, id: status.id},
			}));
		}

		// set((state) => {
		// 			if (status.id !== state.modalOpenStatus.id) {
		// 				return {modalOpenStatus: {status: true, id: status.id}};
		// 			}
		// 			return state;
		// 		});
	},
	resetSetOpenStatus: () =>
		set(() => ({modalOpenStatus: {status: false, id: ''}})),
}));
