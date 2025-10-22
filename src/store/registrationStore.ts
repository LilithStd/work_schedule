import {
	GET_REGISTRATION_TYPE,
	registartionDataTemplate,
} from '@/consts/template';
import {create} from 'zustand';

type registartionDataTypes = {
	day: string;
	registrationTime: registrationTimeTypes[];
};

type workerType = {
	id: string;
	name: string;
};

interface registrationTimeTypes {
	time: string;
	client: string;
	workers: workerType[];
}

interface updateDataTypes {
	day: string;
	time: string;
	client: string;
	worker: workerType;
}

type getRegistrationDataTypes = {
	day: string;
	time: string;
};

interface RegistrationStoreTypes {
	registartionData: registartionDataTypes[];
	getRegistrationWorkerData: (
		getRegistrationData: getRegistrationDataTypes,
	) => workerType[];
	updateRegistrationData: (updateData: updateDataTypes) => void;
}

export const useRegistationStore = create<RegistrationStoreTypes>(
	(set, get) => ({
		registartionData: registartionDataTemplate,
		getRegistrationWorkerData: (registartionData) => {
			const allRegistartionData = get().registartionData;
			return (
				allRegistartionData
					.find((dayData) => dayData.day === registartionData.day)
					?.registrationTime.find(
						(timeData) => timeData.time === registartionData.time,
					)?.workers || []
			);
		},
		updateRegistrationData: (updateData) => {
			console.log(updateData);
			set(() => ({
				registartionData: get().registartionData.map((item) =>
					item.day === updateData.day
						? {
								...item,
								registrationTime: item.registrationTime.map((slot) =>
									slot.time === updateData.time
										? {
												...slot,
												client: updateData.client, // обновляем клиента
												workers: [...(slot.workers || []), updateData.worker], // добавляем в массив
										  }
										: slot,
								),
						  }
						: item,
				),
			}));
		},
	}),
);
