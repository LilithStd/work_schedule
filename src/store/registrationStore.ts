import {
	DAYS,
	LANGUAGE,
	registartionDataTemplate,
	timer,
	week,
} from '@/consts/template';
import {createRegistrationDataTemplate} from '@/utils/helpersFunctions';
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
	worker: string;
	// worker: WorkerDataTypes;
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
	// worker: WorkerDataTypes;
	worker: string;
}

export type createRegistrationDataCellProps = {
	day: string;
	time: string;
};

interface RegistrationStoreTypes {
	updateStoreStatus: boolean;
	setUpdateStoreStatus: (status: boolean) => void;
	registartionData: registartionDataTypes[];
	addNewWorkerCell: (id: string, day: string, time: string) => void;
	createRegistrationData: () => registartionDataTypes[];
	createRegistrationDataCell: (
		creatingData: createRegistrationDataCellProps,
	) => void;
	getRegistrationWorkerData: (getRegistrationData: string) => string;
	// getRegistrationWorkerData: (getRegistrationData: string) => WorkerDataTypes;
	updateRegistrationData: (updateData: updateDataTypes) => void;
}

export const useRegistationStore = create<RegistrationStoreTypes>(
	(set, get) => ({
		updateStoreStatus: false,
		setUpdateStoreStatus: (status) => {
			if (get().updateStoreStatus === status) return;
			set({updateStoreStatus: true});
		},
		registartionData: createRegistrationDataTemplate(),
		createRegistrationData: () => {
			const cell = {
				cell: nanoid(),
				worker: '',

				// worker: {
				// 	id: '',
				// 	name: '',
				// 	surname: '',
				// 	additionalProperties: {
				// 		color: '',
				// 	},
				// },
			};
			const registartionBlock = {
				id: nanoid(),
				client: '',
				cells: [cell],
			};

			const registartionDataTime = timer.map((time) => {
				return {
					time,
					data: [registartionBlock],
				};
			});

			const registartionData = week.map((day) => {
				return {
					day,
					registrationTime: registartionDataTime,
				};
			});
			return registartionData;
		},
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
												worker: nanoid(),
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

		addNewWorkerCell: (day: string, time: string, cellId: string) => {
			//
			const newCell = {
				cell: nanoid(),
				worker: '',
			};

			set((state) => ({
				registartionData: state.registartionData.map((d) => {
					if (d.day !== day) return d;

					return {
						...d,
						registrationTime: d.registrationTime.map((t) => {
							if (t.time !== time) return t;

							return {
								...t,
								data: t.data.map((block) => {
									if (block.id !== cellId) return block;

									return {
										...block,
										cells: [...block.cells, newCell],
									};
								}),
							};
						}),
					};
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
			return cell?.worker ?? '';
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
														if (currentWorker === newWorker) {
															return cell;
														}

														return {
															...cell,
															worker: newWorker,
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
