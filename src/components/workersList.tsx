'use client';

import React, { useState } from 'react'
import Worker from './worker';
import { week, workerListByDayTemplate, workersTest, WorkerTypes } from '@/consts/template';
import { useWorkersStore } from '@/store/workersStore';
import AddWorkerIcons from '../../public/icons/user-plus.svg'
import ModalWindow from './modalWindow';
import { useGlobalStore } from '@/store/globalStore';
import CreateWorkerDataModalTemplate from './createWorkerDataModalTemplate';
import { WorkerDataTypes } from '@/utils/types';

export type WorkersListProps = {
    day: string;
    workers: WorkerDataTypes[];
}


export default function WorkersList() {
    const [isOpen, setIsOpen] = useState(false)
    const setWorkersListbyDay = useWorkersStore((state) => state.setWorkerListByDay);
    const workerData = useWorkersStore((state) => state.workersData)
    const workerListByDayStore = useWorkersStore((state) => state.workerListByDay);
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const worker: WorkerDataTypes = JSON.parse(data) as WorkerDataTypes;
        // console.log(worker)
        setWorkersListbyDay({ workers: worker, day: day });
    }
    const handleCloseModal = () => {
        setIsOpen(false)
        resetModalStatus()

    }

    const handleOpenModal = () => {
        if (modalStatus.status) return
        setIsOpen(true)
        setModalStatus({ status: true, id: '' })

    }

    // console.log(workerListByDayStore)

    return (
        <>
            <div className="border border-black bg-sky-600 text-center justify-center min-h-50  text-black">
                <h2 className="text-center">workers</h2>
                {workerData.map((worker) => <Worker key={worker.id} worker={worker} />)}
                <button
                    className="min-h-10 rounded-xl border w-full border-black flex items-center justify-center"
                    onClick={handleOpenModal}
                >
                    <AddWorkerIcons />
                </button>


            </div>
            {week.map((_, index) => (
                <div
                    onDrop={(e) => handleDrop(e, week[index])}
                    onDragOver={handleDragOver}
                    key={index}
                    className="border border-black bg-sky-600"
                >
                    {workerListByDayStore[index].workers.map((worker) => (
                        <div key={worker.id}>
                            <Worker worker={worker} />
                        </div>
                    ))}
                </div>
            ))}
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
            >
                <CreateWorkerDataModalTemplate onClose={handleCloseModal} />
            </ModalWindow>
        </>
    )
}
