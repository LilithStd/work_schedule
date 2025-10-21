import {WorkersListProps} from '@/components/workersList';
import {workerListByDayTemplate, WorkerTypes} from '@/consts/template';
import {create} from 'zustand';

type WorkerItem = {
	id: string;
	name: string;
};

type WorkerListByDay = {
	day: string;
	workers: WorkerItem;
};

interface WorkersStoreTypes {
	workerListByDay: WorkersListProps[];
	getWorkerListByDay: (day: string) => WorkerTypes[];
	setWorkerListByDay: (worker: WorkerListByDay) => void;
}

export const useWorkersStore = create<WorkersStoreTypes>((set, get) => ({
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
