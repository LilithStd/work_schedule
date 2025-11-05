import {LANGUAGE, THEME} from '@/consts/template';
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
	currentThemeApp: THEME;
	currentLanguageApp: LANGUAGE;
	setModalOpenStatus: (status: modalOpenStatusType) => void;
	resetSetOpenStatus: () => void;
	setCurrentLanguageApp: (language: LANGUAGE) => void;
	setCurrentTheme: (theme: THEME) => void;
}

export const useGlobalStore = create<GlobalStoreTypes>()((set, get) => ({
	modalOpenStatus: {
		status: false,
		id: '',
	},
	currentThemeApp: THEME.LIGHT,
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
	setCurrentTheme: (theme) => {
		if (get().currentThemeApp === theme) return;
		set({currentThemeApp: theme});
	},
}));
