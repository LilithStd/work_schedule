'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import { useEffect, useState } from 'react'
interface WorkerCellTypes {
    id: string
}

export default function WorkerCell({ id }: WorkerCellTypes) {
    const [activeWorker, setActiveWorker] = useState({ id: '', name: '' })
    const getRegistrationData = useRegistationStore(state => state.getRegistrationWorkerData)
    const updateStatus = useRegistationStore(state => state.updateStoreStatus)
    // console.log(id)


    useEffect(() => {
        if (getRegistrationData(id)) {
            setActiveWorker(getRegistrationData(id))
        }
    }, [updateStatus])

    return (
        <div>

            {activeWorker.name !== '' ? activeWorker.name : <AddWorkerIcon />}
        </div>
    )
}
