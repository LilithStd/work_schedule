import {
	registartionDataTemplate,
	UPDATE_REGISTRATION_DATA_STATUS,
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

export type cellsTypes = {
	cell: string;
	worker: workerType;
};

export type dataTypes = {
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
	updateStoreStatus: boolean;
	setUpdateStoreStatus: (status: boolean) => void;
	registartionData: registartionDataTypes[];
	getRegistrationWorkerData: (getRegistrationData: string) => workerType;
	updateRegistrationData: (updateData: updateDataTypes) => void;
}

export const useRegistationStore = create<RegistrationStoreTypes>(
	(set, get) => ({
		updateStoreStatus: false,
		setUpdateStoreStatus: (status) => {
			if (get().updateStoreStatus === status) return;
			set({updateStoreStatus: true});
		},
		registartionData: registartionDataTemplate,
		getRegistrationWorkerData: (getRegistrationData) => {
			const allRegistrationData = get().registartionData;
			const cell = allRegistrationData
				.flatMap((day) => day.registrationTime)
				.flatMap((timeSlot) => timeSlot.data)
				.flatMap((entry) => entry.cells)
				.find((cell) => cell.cell === getRegistrationData);
			return cell?.worker ?? {id: '', name: ''};
		},
		updateRegistrationData: (updateData) => {
			set((state) => ({
				registartionData: state.registartionData.map((dayItem) =>
					dayItem.day === updateData.day
						? {
								...dayItem,
								registrationTime: dayItem.registrationTime.map((timeSlot) =>
									timeSlot.time === updateData.time
										? {
												...timeSlot,
												data: timeSlot.data.map((dataEntry) => ({
													...dataEntry,
													cells: dataEntry.cells.map((cell) =>
														cell.cell === updateData.id
															? {...cell, worker: updateData.worker}
															: cell,
													),
												})),
										  }
										: timeSlot,
								),
						  }
						: dayItem,
				),
			}));
			set({updateStoreStatus: false});
		},
	}),
);
