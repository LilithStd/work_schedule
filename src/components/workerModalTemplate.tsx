'use client'
import { useWorkersStore } from '@/store/workersStore';
import React, { useEffect, useState } from 'react'
import Worker from './worker';
import { useRegistationStore } from '@/store/registrationStore';

interface WorkerModalTemplateProps {
    id: string;
    day: string;
    time: string;
    onClose: () => void
}

export default function WorkerModalTemplate({ id, day, time, onClose }: WorkerModalTemplateProps) {
    const getListOfAvailableWorkers = useWorkersStore((state) => state.getWorkerListByDay);
    const setRegistrationData = useRegistationStore(state => state.updateRegistrationData);
    const setUpdateStatusStore = useRegistationStore(state => state.setUpdateStoreStatus);

    return (
        <div className='w-full'>
            <p>List availible workers</p>
            <p>{id}</p>
            {getListOfAvailableWorkers(day).map((worker) => (
                <div key={worker.id} onClick={() => {
                    const updateData = { id: id, day: day, time: time, client: '', worker }
                    console.log(worker)
                    setRegistrationData(updateData)
                    setUpdateStatusStore(true)
                    onClose()
                }}>

                    <Worker worker={worker} />
                </div>
            ))}
        </div>
    )
}
