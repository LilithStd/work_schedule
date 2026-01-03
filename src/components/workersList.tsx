'use client';

import React, { useEffect, useRef, useState } from 'react'
import { THEME_COLORS, TYPE_WORKER_CELL, TYPE_WORKER_MODAL, week, workerListByDayTemplate, workersTest, WorkerTypes } from '@/consts/template';
import { useWorkersStore } from '@/store/workersStore';
import AddWorkerIcons from '../../public/icons/user-plus.svg'
import ModalWindow from './modalWindow';
import { useGlobalStore } from '@/store/globalStore';
import WorkerDataModalTemplate from './workerDataModalTemplate';
import { WorkerDataTypes } from '@/utils/types';
import WorkerCell from './workerCell';


export type WorkersListProps = {
    day: string;
    workers: WorkerDataTypes[];
}


export default function WorkersList() {
    const [isOpen, setIsOpen] = useState(false)
    const [dragOverDay, setDragOverDay] = useState<string | null>(null);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const setWorkersListbyDay = useWorkersStore((state) => state.setWorkerListByDay);
    const workerData = useWorkersStore((state) => state.workersData)
    // const workerListByDayStore = useWorkersStore((state) => state.workerListByDay);
    const workersListByDay = useWorkersStore((state) => state.getWorkerListByDay)
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const workerListByDayStore = useWorkersStore((state) => state.workerListByDay);
    const getWorkerListByDay = useWorkersStore((state) => state.getWorkerListByDay);
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/workerId");
        const worker = data;
        setWorkersListbyDay(day, worker);
        setDragOverDay(null);
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
            <div className={` ${THEME_COLORS[currentThemeApp].container.main} text-center flex flex-col min-h-50  m-1 rounded-xl`}>
                <div className="m-2 flex flex-col gap-2">
                    {workerData.map((workerData) =>
                        <WorkerCell key={workerData.id} worker={workerData.id} typeWorkerCell={TYPE_WORKER_CELL.CREATE} />
                    )}
                </div>

                <button
                    className={`m-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} p-2 flex items-center justify-center shadow-lg`}
                    ref={anchorRef}
                    onClick={handleOpenModal}
                >
                    <AddWorkerIcons widht={30} height={30} />
                </button>


            </div>
            {week.map((day, index) => (
                <div
                    onDragEnter={() => setDragOverDay(day)}
                    onDragLeave={() => setDragOverDay(null)}
                    key={day}
                    onDrop={(e) => handleDrop(e, day)}
                    onDragOver={handleDragOver}
                    className={` rounded-xl m-1 p-2 flex flex-col gap-2 ${THEME_COLORS[currentThemeApp].container.main} ${THEME_COLORS[currentThemeApp].hover.changeScale} ${dragOverDay === day ? THEME_COLORS[currentThemeApp].element.onDragEnter : ''}`}
                >
                    {getWorkerListByDay(day).map((worker) => (
                        <WorkerCell key={worker.id} worker={worker.id} typeWorkerCell={TYPE_WORKER_CELL.LIST} />
                    ))}
                </div>
            ))}
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
                anchorRef={anchorRef}
            >
                <WorkerDataModalTemplate
                    onClose={handleCloseModal}
                    typeWorkerModal={TYPE_WORKER_MODAL.NEW}
                />
            </ModalWindow>
        </React.Fragment>
    )
}
