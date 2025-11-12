'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import { WorkerDataTypes } from '@/utils/types';
import Worker from './worker';
interface WorkerCellTypes {
    id: string,
    day: string,
    time: string
}

export default function WorkerCell({ id, day, time }: WorkerCellTypes) {
    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData);
    const setRegistrationData = useRegistationStore((state) => state.updateRegistrationData)
    const worker = getRegistrationData(id);
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const selectedWorker: WorkerDataTypes = JSON.parse(data) as WorkerDataTypes;
        const updateData = { id: id, day: day, time: time, client: '', worker: selectedWorker }
        setRegistrationData(updateData)
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`${worker.additionalProperties?.color} w-full justify-center flex min-h-10 rounded-xl items-center`}
        >

            {worker && worker.name ? <Worker worker={worker} /> : <AddWorkerIcon />}
        </div>
    );
}

