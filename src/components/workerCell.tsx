'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import { useEffect, useState } from 'react'
interface WorkerCellTypes {
    id: string
}

export default function WorkerCell({ id }: WorkerCellTypes) {
    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData);
    const worker = getRegistrationData(id);

    return (
        <div>
            {worker?.name ? worker.name : <AddWorkerIcon />}
        </div>
    );
}

