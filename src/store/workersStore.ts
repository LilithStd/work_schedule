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
	updateWorkerData: (updateWorkerData: WorkerDataTypes) => void;
	createWorkerData: (workerData: WorkerDataTypes) => void;
	workerListByDay: WorkersListProps[];
	getWorkerListByDay: (day: string) => WorkerDataTypes[];
	setWorkerListByDay: (worker: WorkerListByDay) => void;
}

export const useWorkersStore = create<WorkersStoreTypes>((set, get) => ({
	workersData: [],
	updateWorkerData: (updateWorkerData) => {
		set((state) => ({
			workersData: state.workersData.map((worker) =>
				worker.id === updateWorkerData.id
					? {
							...worker,
							additionalProperties: {
								...worker.additionalProperties,
								color:
									updateWorkerData.additionalProperties?.color ??
									'bg-neutral-600',
							},
					  }
					: worker,
			),
		}));
	},
	createWorkerData: (workerData) => {
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
		// console.log(worker);
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
