import {LANGUAGE, registartionDataTemplate} from '@/consts/template';
import {WorkerDataTypes} from '@/utils/types';
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
	worker: WorkerDataTypes;
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
	worker: WorkerDataTypes;
}

interface RegistrationStoreTypes {
	updateStoreStatus: boolean;
	setUpdateStoreStatus: (status: boolean) => void;
	registartionData: registartionDataTypes[];
	getRegistrationWorkerData: (getRegistrationData: string) => WorkerDataTypes;
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
			// console.log(cell?.worker);
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
													cells: dataEntry.cells.map((cell) => {
														if (cell.cell !== updateData.id) return cell;

														const currentWorker = cell.worker;
														const newWorker = updateData.worker;
														if (
															currentWorker?.id === newWorker?.id &&
															currentWorker?.name === newWorker?.name
														) {
															return cell;
														}

														return {
															...cell,
															worker: {...newWorker},
														};
													}),
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
