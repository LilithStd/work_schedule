'use client'
import { useRegistationStore } from '@/store/registrationStore'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
import { WorkerDataTypes } from '@/utils/types';
import Worker from './worker';
import { use, useEffect, useRef, useState } from 'react';
import ModalWindow from './modalWindow';
import WorkerDataModalTemplate from './workerDataModalTemplate';
import { useGlobalStore } from '@/store/globalStore';
import { TYPE_WORKER_MODAL } from '@/consts/template';

interface WorkerCellTypes {
    cellId?: string,
    id?: string,
    day?: string,
    time?: string
    worker?: WorkerDataTypes
}

export default function WorkerCell({ cellId, id, day, time, worker }: WorkerCellTypes) {
    const [isOpen, setIsOpen] = useState(false)
    const [typeOfModalWindow, setTypeOfModalWindow] = useState<TYPE_WORKER_MODAL>(TYPE_WORKER_MODAL.EDIT);
    const [currrentWorkerData, setCurrentWorkerData] = useState<WorkerDataTypes | null>(null);

    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData);
    const setRegistrationData = useRegistationStore((state) => state.updateRegistrationData)
    const addNewWorkerCell = useRegistationStore((state) => state.addNewWorkerCell)
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)
    const anchorRef = useRef<HTMLButtonElement>(null);
    const workerData = worker ? worker : getRegistrationData(id || '');

    const handleCloseModal = () => {
        setIsOpen(false)
        resetModalStatus()

    }

    const handleOpenModal = () => {
        if (modalStatus.status && workerData.id !== '' && workerData.name !== '') return
        setIsOpen(true)
        setModalStatus({ status: true, id: '' })

    }
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const selectedWorker: WorkerDataTypes = JSON.parse(data) as WorkerDataTypes;
        const updateData = { id: id || '', day: day || '', time: time || '', client: '', worker: selectedWorker }
        setRegistrationData(updateData)
    };

    useEffect(() => {
        if (workerData && workerData.name !== '') {
            const cellIdToUse = cellId ? cellId : '';
            addNewWorkerCell(day || '', time || '', cellIdToUse,)
        }
    }, [workerData])
    useEffect(() => {
        if (worker && (worker.id === '' || worker.name === '')) {
            setCurrentWorkerData(worker)
        } else { setCurrentWorkerData(getRegistrationData(id || '')) }
    }, [workerData])

    return (
        <div

            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`${workerData.additionalProperties?.color} w-full justify-center flex min-h-10 rounded-xl items-center`}

        >

            {workerData && workerData.name ? <button
                onClick={handleOpenModal}
                ref={anchorRef}

            >
                <Worker worker={workerData} />

            </button> : <AddWorkerIcon />}


            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
                anchorRef={anchorRef}
            >
                <WorkerDataModalTemplate onClose={handleCloseModal} typeWorkerModal={typeOfModalWindow} workerEditData={workerData} />
            </ModalWindow>
        </div>
    );
}

