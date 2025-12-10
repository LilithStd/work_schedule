import {create} from 'zustand';

type ClientPropsType = {
	id: string;
	name: string;
	surname: string;
	personalCode: string;
	typeEkspertise: string;
	status: string;
	customer: string;
};

const statusClient = {
	suspected: {
		label: 'suspected',
		translate: {
			EN: 'Suspected',
			RU: 'Подозреваемый',
			LV: 'Aizdomās turētais',
		},
	},
	accused: {
		label: 'accused',
		translate: {
			EN: 'Accused',
			RU: 'Обвиняемый',
			LV: 'Apsūdzētais',
		},
	},
	witness: {
		label: 'witness',
		translate: {
			EN: 'Witness',
			RU: 'Свидетель',
			LV: 'Liecinieks',
		},
	},
	victim: {
		label: 'victim',
		translate: {
			EN: 'Victim',
			RU: 'Потерпевший',
			LV: 'Cietušais',
		},
	},
};

interface ClientStoreTypes {
	clientsList: ClientPropsType[];
	addClient: (client: ClientPropsType) => void;
	updateClient: (id: string, updatedClient: ClientPropsType) => void;
	removeClient: (id: string) => void;
}

export const useClientStore = create<ClientStoreTypes>()((set, get) => ({
	clientsList: [],
	addClient: (client: ClientPropsType) => {
		set((state) => ({
			clientsList: [...state.clientsList, client],
		}));
	},
	updateClient: (id: string, updatedClient: ClientPropsType) => {
		set((state) => ({
			clientsList: state.clientsList.map((client) =>
				client.id === id ? updatedClient : client,
			),
		}));
	},
	removeClient: (id: string) => {
		set((state) => ({
			clientsList: state.clientsList.filter((client) => client.id !== id),
		}));
	},
}));
