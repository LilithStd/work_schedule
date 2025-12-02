'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import EditWorkerDataWheelIcon from '../../public/icons/settingWheel.svg'
import { WorkerDataTypes } from '@/utils/types';
import Worker from './worker';
import { useEffect, useRef, useState } from 'react';
import ModalWindow from './modalWindow';
import WorkerDataModalTemplate from './workerDataModalTemplate';
import { useGlobalStore } from '@/store/globalStore';
import { THEME_COLORS, TYPE_WORKER_CELL, TYPE_WORKER_MODAL } from '@/consts/template';
import { useWorkersStore } from '@/store/workersStore';

interface WorkerCellTypes {
    cellId?: string,
    id?: string,
    day?: string,
    time?: string
    worker?: string
    typeWorkerCell: TYPE_WORKER_CELL
}

export default function WorkerCell({ cellId, id, day, time, worker, typeWorkerCell }: WorkerCellTypes) {
    const [isOpen, setIsOpen] = useState(false)
    const [typeOfModalWindow, setTypeOfModalWindow] = useState<TYPE_WORKER_MODAL>(TYPE_WORKER_MODAL.EDIT);
    const [currrentWorkerData, setCurrentWorkerData] = useState<WorkerDataTypes | null>(null);
    //stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp);
    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData);
    const getWorkerData = useWorkersStore((state) => state.getWorkerDataById);
    const setRegistrationData = useRegistationStore((state) => state.updateRegistrationData)
    const addNewWorkerCell = useRegistationStore((state) => state.addNewWorkerCell)
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)
    const anchorRef = useRef<HTMLButtonElement>(null);
    const workerData = getWorkerData(worker ? worker : getRegistrationData(id || ''))
    // 

    // 
    const handleCloseModal = () => {
        setIsOpen(false)
        resetModalStatus()

    }


    const handleOpenModal = () => {
        if (modalStatus.status && workerData && workerData.name !== '' || typeWorkerCell !== TYPE_WORKER_CELL.CREATE) return
        setIsOpen(true)
        setModalStatus({ status: true, id: '' })

    }
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/workerId");
        const selectedWorker = data;
        const updateData = { id: id || '', day: day || '', time: time || '', client: '', cell: cellId || '', worker: selectedWorker }
        setRegistrationData(updateData)

    };

    return (
        <div

            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`${workerData?.additionalProperties?.color ?? THEME_COLORS[currentThemeApp].subContainer} w-full justify-center flex min-h-10 rounded-xl items-center`}

        >

            {workerData ? <button
                onClick={handleOpenModal}
                ref={anchorRef}
                className={`"w-full flex items-center justify-between  px-2 py-1"`}

            >
                <Worker worker={workerData} />
                <EditWorkerDataWheelIcon width={30} heigth={30} />
            </button> :
                <div >
                    <AddWorkerIcon />
                </div>
            }
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
                anchorRef={anchorRef}
            >
                <WorkerDataModalTemplate onClose={handleCloseModal} typeWorkerModal={typeOfModalWindow} workerEditData={workerData ?? undefined} />
            </ModalWindow>
        </div>
    );
}

