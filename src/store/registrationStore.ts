import {registartionDataTemplate} from '@/consts/template';
import {create} from 'zustand';

type registartionDataTypes = {
	day: string;
	registrationTime: registrationTimeTypes[];
};

type workerType = {
	id: string;
	name: string;
};

type cellsTypes = {
	cell: string;
	worker: workerType;
};

type dataTypes = {
	id: string;
	client: string;
	cells: cellsTypes[];
};

interface registrationTimeTypes {
	time: string;
	data: dataTypes[];
}

interface updateDataTypes {
	id: string;
	day: string;
	time: string;
	client: string;
	worker: workerType;
}

type getRegistrationDataTypes = {
	id: string;
	day: string;
	time: string;
};

interface RegistrationStoreTypes {
	registartionData: registartionDataTypes[];
	getRegistrationWorkerData: (
		getRegistrationData: getRegistrationDataTypes,
	) => workerType;
	updateRegistrationData: (updateData: updateDataTypes) => void;
}

export const useRegistationStore = create<RegistrationStoreTypes>(
	(set, get) => ({
		registartionData: registartionDataTemplate,
		getRegistrationWorkerData: (getRegistrationData) => {
			const allRegistartionData = get().registartionData;
			return {id: '', name: ''};
		},
		updateRegistrationData: (updateData) => {},
	}),
);
