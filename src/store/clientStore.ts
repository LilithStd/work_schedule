import {create} from 'zustand';

export type ClientDataType = {
	id: string;
	data: string;
	time: string;
	name: string;
	surname: string;
	personalCode: string;
	typeEkspertise: string;
	subTypeEkspertise: string;
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
	clientsList: ClientDataType[];
	addClient: (client: ClientDataType) => void;
	updateClient: (id: string, updatedClient: ClientDataType) => void;
	removeClient: (id: string) => void;
}

export const useClientStore = create<ClientStoreTypes>()((set, get) => ({
	clientsList: [],
	addClient: (client: ClientDataType) => {
		set((state) => ({
			clientsList: [...state.clientsList, client],
		}));
	},
	updateClient: (id: string, updatedClient: ClientDataType) => {
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
