'use client'

import { useGlobalStore } from "@/store/globalStore"
import ModalWindow from "./modalWindow"
import { useEffect, useMemo, useState } from "react"
import Client from "./client"

import AddWorkerIcon from "../../public/icons/user-plus.svg"
import ClientModalTemplate from "./clientModalTemplate"
import { MODAL_TYPE } from "@/consts/template"
import WorkerModalTemplate from "./workerModalTemplate"
import { cellsTypes, dataTypes, useRegistationStore } from "@/store/registrationStore"

type CellProps = {
    id: string,
    day: string,
    time: string
    data: dataTypes[]
}

type CellWorker = {
    cellId: string,
    id: string,
    name: string
}

export default function Cell({ id, day, time, data }: CellProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentCellId, setCurrentId] = useState('')
    const [currentWorker, setCurrentWorker] = useState<CellWorker[]>([])
    const [typeModalWindow, setTypeModalWindow] = useState<MODAL_TYPE>(MODAL_TYPE.ADD_CLIENT)
    const [tempClientName, setTempClientName] = useState("")
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)
    const getRegistrationData = useRegistationStore((state) => state.getRegistrationWorkerData)



    const cells = data.find((item) => item.cells)?.cells || []

    const worker = getRegistrationData(id);
    const foundWorker = getRegistrationData(currentCellId);
    // console.log(foundWorker)

    // console.log(foundWorker)
    useEffect(() => {
        if (foundWorker?.name && foundWorker?.id) {
            setCurrentWorker((prev) => {
                const addWorker = { cellId: currentCellId, ...foundWorker };

                if (prev.some((element) => element.cellId === currentCellId)) {
                    return prev.map((element) =>
                        element.cellId === currentCellId ? addWorker : element
                    );
                }

                return [...prev, addWorker];
            });
        }
    }, [currentCellId, foundWorker.id, foundWorker.name]);
    // console.log(currentWorker)

    const handleOpenModal = () => {
        if (modalStatus.status) return
        setIsOpen(true)
        setModalStatus({ status: true, id: id })
    }
    const handleCloseModal = () => {
        setIsOpen(false)
        resetModalStatus()

    }

    return (
        <div className="m-2">
            <div className="flex flex-col xl:flex-row gap-2">
                <button
                    className={`xl:w-1/2 row-start-1 row-end-2  min-h-10 rounded-xl ${isOpen && typeModalWindow === MODAL_TYPE.ADD_CLIENT ? 'bg-fuchsia-600' : tempClientName.length > 0 ? 'bg-emerald-500 hover:bg-emerald-200' : 'bg-sky-500 hover:bg-sky-700'}`}
                    onClick={() => (
                        handleOpenModal(),
                        setTypeModalWindow(MODAL_TYPE.ADD_CLIENT)
                    )}
                >
                    <Client name={tempClientName} />
                </button>
                <div className="xl:w-1/2 flex flex-col gap-2">
                    {cells.map((item, idx) => (
                        <button key={idx} className={`flex items-center justify-center ${isOpen && typeModalWindow === MODAL_TYPE.ADD_WORKER ? 'bg-fuchsia-600' : 'bg-emerald-500 hover:bg-emerald-200'}  bg-sky-100 min-h-10 rounded-xl`}
                            onClick={() => (
                                handleOpenModal(),
                                setTypeModalWindow(MODAL_TYPE.ADD_WORKER),
                                setCurrentId(item.cell)
                            )}
                        >
                            {
                                currentWorker.find((cell) => cell.cellId === item.cell) ? currentWorker.find((cell) => cell.cellId === item.cell)?.name :
                                    <AddWorkerIcon />
                            }
                        </button>
                    ))}
                </div>
            </div>
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
            >
                {typeModalWindow === MODAL_TYPE.ADD_CLIENT &&
                    <ClientModalTemplate
                        onSaveClientName={setTempClientName}
                        clientName={tempClientName}
                        onClose={handleCloseModal}
                        id={id} />
                }
                {typeModalWindow === MODAL_TYPE.ADD_WORKER &&
                    <WorkerModalTemplate
                        id={currentCellId}
                        day={day}
                        time={time}
                        // setCurrentWork={setCurrentWorker}
                        onClose={handleCloseModal}
                    />
                }
            </ModalWindow>
        </div >
    )
}
