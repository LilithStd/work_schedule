'use client'
import { useWorkersStore } from '@/store/workersStore';
import React, { useEffect, useState } from 'react'
import Worker from './worker';
import { useRegistationStore } from '@/store/registrationStore';
type currenWork = {
    cellId: string;
    id: string,
    name: string
}
interface WorkerModalTemplateProps {
    id: string;
    day: string;
    time: string;
    setCurrentWork?: (currentWorker: currenWork) => void
    onClose: () => void
}

export default function WorkerModalTemplate({ id, day, time, onClose, setCurrentWork }: WorkerModalTemplateProps) {
    const getListOfAvailableWorkers = useWorkersStore((state) => state.getWorkerListByDay);
    const setRegistrationData = useRegistationStore(state => state.updateRegistrationData);
    const setUpdateStatusStore = useRegistationStore(state => state.setUpdateStoreStatus);
    const getRegistrationData = useRegistationStore(state => state.getRegistrationWorkerData);
    const registrationData = useRegistationStore(state => state.registartionData);
    // console.log(id)

    return (
        <div className='w-full'>
            <p>List availible workers</p>
            <p>{id}</p>
            {getListOfAvailableWorkers(day).map((worker) => (
                <div key={worker.id} onClick={() => {
                    const updateData = { id: id, day: day, time: time, client: '', worker }
                    setRegistrationData(updateData)
                    setUpdateStatusStore(true)
                    console.log(registrationData)
                    onClose()
                }}>

                    <Worker id={worker.id} name={worker.name} />
                </div>
            ))}
        </div>
    )
}
