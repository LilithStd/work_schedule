import {WorkerTypes} from '@/utils/types';
import {create} from 'zustand';

interface UseWorkerStore {
	workersData: WorkerTypes[];
	updateWorkerData: () => void;
	createWorkerData: (workerData: WorkerTypes) => void;
}

export const useWorkerStore = create<UseWorkerStore>();
