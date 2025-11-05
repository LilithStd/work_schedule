import {LANGUAGE} from '@/consts/template';
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
	currentLanguageApp: LANGUAGE;
	setModalOpenStatus: (status: modalOpenStatusType) => void;
	resetSetOpenStatus: () => void;
	setCurrentLanguageApp: (language: LANGUAGE) => void;
}

export const useGlobalStore = create<GlobalStoreTypes>()((set, get) => ({
	modalOpenStatus: {
		status: false,
		id: '',
	},
	currentLanguageApp: LANGUAGE.EN,
	setModalOpenStatus: (status) => {
		if (!get().modalOpenStatus.status) {
			set(() => ({
				modalOpenStatus: {status: true, id: status.id},
			}));
		}
	},
	resetSetOpenStatus: () =>
		set(() => ({modalOpenStatus: {status: false, id: ''}})),
	setCurrentLanguageApp: (language) => {
		if (get().currentLanguageApp === language) return;
		set({currentLanguageApp: language});
	},
}));
