'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import { WorkerTypes } from '@/consts/template';
interface WorkerCellTypes {
    id: string,
    day: string,
    time: string
}

export default function WorkerCell({ id, day, time }: WorkerCellTypes) {
    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData);
    const setRegistrationData = useRegistationStore((state) => state.updateRegistrationData)
    const registrationData = useRegistationStore(state => state.registartionData);
    const worker = getRegistrationData(id);
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const selectedWorker: WorkerTypes = JSON.parse(data) as WorkerTypes;
        const updateData = { id: id, day: day, time: time, client: '', worker: selectedWorker }
        setRegistrationData(updateData)
    };
    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnd={() => {
                console.log('drag end worker')
            }}>
            {worker?.name ? worker.name : <AddWorkerIcon />}
        </div>
    );
}

