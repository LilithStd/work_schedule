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
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)




    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const worker: WorkerDataTypes = JSON.parse(data) as WorkerDataTypes;
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


    return (
        <React.Fragment>
            <div className=" bg-sky-600 text-center flex flex-col min-h-50  m-1 rounded-xl">
                <h2 className="text-center">workers</h2>
                <div className="m-2 flex flex-col gap-2">
                    {workerData.map((worker) => <Worker key={worker.id} worker={worker} />)}
                </div>

                <button
                    className="m-2 rounded-xl bg-blue-400 p-2 flex items-center justify-center shadow-lg"
                    onClick={handleOpenModal}
                >
                    <AddWorkerIcons />
                </button>


            </div>
            {week.map((day, index) => (
                <div
                    key={day}
                    onDrop={(e) => handleDrop(e, day)} // <-- day из текущей итерации
                    onDragOver={(e) => e.preventDefault()}
                    className="bg-sky-600 rounded-xl m-1"
                >
                    {workerListByDayStore[index]?.workers.map((worker) => (
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
        </React.Fragment>
    )
}
