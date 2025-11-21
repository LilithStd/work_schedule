import {nanoid} from 'nanoid';
import {create} from 'zustand';
import {workerListByDayTemplate} from '@/consts/template';
import {WorkerDataTypes} from '@/utils/types';

interface WorkersStoreTypes {
	workersData: WorkerDataTypes[];
	workerListByDay: {day: string; workers: string[]}[];

	updateWorkerData: (updateWorkerData: WorkerDataTypes) => void;
	createWorkerData: (workerData: WorkerDataTypes) => void;
	getWorkerDataById: (id: string) => WorkerDataTypes | null;
	getWorkerListByDay: (day: string) => WorkerDataTypes[];
	setWorkerListByDay: (day: string, workerId: string) => void;
}

export const useWorkersStore = create<WorkersStoreTypes>((set, get) => ({
	workersData: [],
	workerListByDay: workerListByDayTemplate.map((item) => ({
		day: item.day,
		workers: [],
	})),

	getWorkerDataById: (id) => {
		return get().workersData.find((w) => w.id === id) || null;
	},

	updateWorkerData: (updated) => {
		set((state) => ({
			workersData: state.workersData.map((worker) =>
				worker.id === updated.id
					? {
							...worker,
							...updated,
							additionalProperties: {
								...worker.additionalProperties,
								...(updated.additionalProperties || {}),
								color: updated.additionalProperties?.color ?? 'bg-neutral-300',
							},
					  }
					: worker,
			),
		}));
	},

	createWorkerData: (workerData) => {
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

	getWorkerListByDay: (day) => {
		const entry = get().workerListByDay.find((d) => d.day === day);
		if (!entry) return [];

		return entry.workers
			.map((id) => get().workersData.find((w) => w.id === id))
			.filter(Boolean) as WorkerDataTypes[]; // возвращаем актуальные данные
	},

	setWorkerListByDay: (day, workerId) => {
		set((state) => ({
			workerListByDay: state.workerListByDay.map((item) =>
				item.day === day
					? item.workers.includes(workerId)
						? item
						: {...item, workers: [...item.workers, workerId]}
					: item,
			),
		}));
	},
}));
