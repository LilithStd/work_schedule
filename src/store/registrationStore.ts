import {LANGUAGE, registartionDataTemplate} from '@/consts/template';
import {WorkerDataTypes} from '@/utils/types';
import {nanoid} from 'nanoid';
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

export type createRegistrationDataCellProps = {
	day: string;
	time: string;
};

interface RegistrationStoreTypes {
	updateStoreStatus: boolean;
	setUpdateStoreStatus: (status: boolean) => void;
	registartionData: registartionDataTypes[];
	createRegistrationDataCell: (
		creatingData: createRegistrationDataCellProps,
	) => void;
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
		createRegistrationDataCell: (creatingData) => {
			set((state) => ({
				registartionData: state.registartionData.map((dayItem) => {
					if (dayItem.day === creatingData.day) {
						return {
							...dayItem,
							registrationTime: dayItem.registrationTime.map((timeSlot) => {
								if (timeSlot.time === creatingData.time) {
									const newCell = {
										id: nanoid(),
										client: '',
										cells: [
											{
												cell: nanoid(),
												worker: {
													id: nanoid(),
													name: '',
													surname: '',
													additionalProperties: {
														color: '',
													},
												},
											},
										],
									};

									return {
										...timeSlot,
										data: [...timeSlot.data, newCell],
									};
								}
								return timeSlot;
							}),
						};
					}
					return dayItem;
				}),
			}));
		},

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
		},
	}),
);
