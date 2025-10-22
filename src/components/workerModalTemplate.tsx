'use client'
import { useWorkersStore } from '@/store/workersStore';
import React from 'react'
import Worker from './worker';
import { useRegistationStore } from '@/store/registrationStore';
interface WorkerModalTemplateProps {
    day: string;
    time: string
    onClose: () => void
}

export default function WorkerModalTemplate({ day, time, onClose }: WorkerModalTemplateProps) {
    const getListOfAvailableWorkers = useWorkersStore((state) => state.getWorkerListByDay);
    const setRegistrationData = useRegistationStore(state => state.updateRegistrationData)
    const getRegistrationData = useRegistationStore(state => state.getRegistrationWorkerData)
    return (
        <div className='w-full'>
            <p>List availible workers</p>
            {getListOfAvailableWorkers(day).map((worker) => (
                <div key={worker.id} onClick={() => {
                    const updateData = { day: day, time: time, client: '', worker }
                    setRegistrationData(updateData)
                    console.log(getRegistrationData({ time: time, day: day }))
                    onClose()
                }}>
                    <Worker id={worker.id} name={worker.name} />
                </div>
            ))}
        </div>
    )
}
