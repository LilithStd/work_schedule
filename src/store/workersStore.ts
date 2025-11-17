import {WorkersListProps} from '@/components/workersList';
import {COLORS, VALUE_COLORS_STRENGTH} from '@/consts/colors';
import {workerListByDayTemplate, WorkerTypes} from '@/consts/template';
import {setColors} from '@/utils/helpersFunctions';
import {WorkerDataTypes} from '@/utils/types';
import {nanoid} from 'nanoid';
import {create} from 'zustand';

type WorkerItem = {
	id: string;
	name: string;
};

type WorkerListByDay = {
	day: string;
	workers: WorkerDataTypes;
};

type updateWorkerData = {
	id: string;
	color: string;
};

interface WorkersStoreTypes {
	workersData: WorkerDataTypes[];
	workerListByDay: WorkersListProps[];
	updateWorkerData: (updateWorkerData: WorkerDataTypes) => void;
	createWorkerData: (workerData: WorkerDataTypes) => void;
	getWorkerById: (id: string) => WorkerDataTypes;
	getWorkerListByDay: (day: string) => WorkerDataTypes[];
	setWorkerListByDay: (worker: WorkerListByDay) => void;
}

export const useWorkersStore = create<WorkersStoreTypes>((set, get) => ({
	workersData: [],
	getWorkerById: (id) => {
		return (
			get().workersData.find((worker) => worker.id === id) || {
				id: '',
				name: '',
				additionalProperties: {color: ''},
			}
		);
	},
	updateWorkerData: (updateWorkerData) => {
		set((state) => ({
			workersData: state.workersData.map((worker) =>
				worker.id === updateWorkerData.id
					? {
							...worker,
							...updateWorkerData,
							additionalProperties: {
								...worker.additionalProperties,
								...updateWorkerData.additionalProperties,
								color:
									updateWorkerData.additionalProperties?.color ??
									'bg-netral-300',
							},
					  }
					: worker,
			),
		}));
	},
	createWorkerData: (workerData) => {
		console.log('createWorkerData', workerData);
		const exists = get().workersData.some(
			(worker) => worker.id === workerData.id,
		);
		if (exists) return;
		set((state) => ({
			workersData: [
				...state.workersData,
				{
					id: nanoid(),
					name: workerData.name,
					surname: workerData.surname,
					additionalProperties: workerData.additionalProperties ?? {
						color: 'bg-neutral-300',
					},
				},
			],
		}));
	},
	workerListByDay: workerListByDayTemplate,
	getWorkerListByDay: (day: string) => {
		const workerList = get().workerListByDay.find((item) => item.day === day);
		return workerList ? workerList.workers : [];
	},
	setWorkerListByDay: (worker) => {
		set((state) => ({
			workerListByDay: state.workerListByDay.map((item) => {
				if (item.day === worker.day) {
					if (item.workers.find((w) => w.id === worker.workers.id)) {
						return item;
					}
					return {day: item.day, workers: [...item.workers, worker.workers]};
				}
				return item;
			}),
		}));
	},
}));
