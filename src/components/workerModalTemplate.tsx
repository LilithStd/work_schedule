'use client'
import { useWorkersStore } from '@/store/workersStore';
import React, { useEffect, useState } from 'react'
import Worker from './worker';
import { useRegistationStore } from '@/store/registrationStore';
interface WorkerModalTemplateProps {
    id: string;
    day: string;
    time: string
    onClose: () => void
}

export default function WorkerModalTemplate({ id, day, time, onClose }: WorkerModalTemplateProps) {
    const getListOfAvailableWorkers = useWorkersStore((state) => state.getWorkerListByDay);
    const setRegistrationData = useRegistationStore(state => state.updateRegistrationData)
    const getRegistrationData = useRegistationStore(state => state.getRegistrationWorkerData)
    useEffect(() => {
        console.log(getRegistrationData({ id, time, day }))

    }, [])

    return (
        <div className='w-full'>
            <p>List availible workers</p>
            {getListOfAvailableWorkers(day).map((worker) => (
                <div key={worker.id} onClick={() => {
                    const updateData = { id: id, day: day, time: time, client: '', worker }
                    setRegistrationData(updateData)
                    console.log(getRegistrationData({ id, time, day }))
                    onClose()
                }}>
                    <Worker id={worker.id} name={worker.name} />
                </div>
            ))}
        </div>
    )
}
