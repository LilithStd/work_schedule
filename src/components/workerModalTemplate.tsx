'use client'
import { useWorkersStore } from '@/store/workersStore';
import React from 'react'
interface WorkerModalTemplateProps {
    day: string;
}

export default function WorkerModalTemplate({ day }: WorkerModalTemplateProps) {
    const getListOfAvailableWorkers = useWorkersStore((state) => state.getWorkerListByDay);
    return (
        <div>
            <p>List availible workers</p>
            {getListOfAvailableWorkers(day).map((worker) => (
                <p key={worker.id}>{worker.name}</p>
            ))}
        </div>
    )
}
