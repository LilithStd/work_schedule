'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import { WorkerDataTypes } from '@/utils/types';
import Worker from './worker';
import { useEffect, useRef } from 'react';
interface WorkerCellTypes {
    cellId?: string,
    id: string,
    day: string,
    time: string
}

export default function WorkerCell({ cellId, id, day, time }: WorkerCellTypes) {
    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData);
    const setRegistrationData = useRegistationStore((state) => state.updateRegistrationData)
    const addNewWorkerCell = useRegistationStore((state) => state.addNewWorkerCell)
    const containerRef = useRef<HTMLDivElement | null>(null);
    const worker = getRegistrationData(id);
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const container = containerRef.current;
        if (!container) return;

        const { top, bottom } = container.getBoundingClientRect();
        const scrollSpeed = 15;
        const edgeThreshold = 80;


        if (e.clientY < top + edgeThreshold) {
            container.scrollTop -= scrollSpeed;
        }


        if (e.clientY > bottom - edgeThreshold) {
            container.scrollTop += scrollSpeed;
        }
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const selectedWorker: WorkerDataTypes = JSON.parse(data) as WorkerDataTypes;
        const updateData = { id: id, day: day, time: time, client: '', worker: selectedWorker }
        setRegistrationData(updateData)
    };

    useEffect(() => {
        if (worker && worker.name !== '') {
            const cellIdToUse = cellId ? cellId : '';
            addNewWorkerCell(day, time, cellIdToUse,)
        }
    }, [worker])

    return (
        <div
            ref={containerRef}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`${worker.additionalProperties?.color} w-full justify-center flex min-h-10 rounded-xl items-center`}
        >

            {worker && worker.name ? <Worker worker={worker} /> : <AddWorkerIcon />}
        </div>
    );
}

