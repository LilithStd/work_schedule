'use client'

import { useGlobalStore } from "@/store/globalStore"
import ModalWindow from "./modalWindow"
import { useState } from "react"
import Client from "./client"

import AddWorkerIcon from "../../public/icons/user-plus.svg"
import ClientModalTemplate from "./clientModalTemplate"
import { MODAL_TYPE } from "@/consts/template"
import WorkerModalTemplate from "./workerModalTemplate"

type CellProps = {
    id: string,
    day: string
}

export default function Cell({ id, day }: CellProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [typeModalWindow, setTypeModalWindow] = useState<MODAL_TYPE>(MODAL_TYPE.ADD_CLIENT)
    const [tempClientName, setTempClientName] = useState("")
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)

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
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <button key={idx} className={`flex items-center justify-center ${isOpen && typeModalWindow === MODAL_TYPE.ADD_WORKER ? 'bg-fuchsia-600' : 'bg-emerald-500 hover:bg-emerald-200'}  bg-sky-100 min-h-10 rounded-xl`}
                            onClick={() => (
                                handleOpenModal(),
                                setTypeModalWindow(MODAL_TYPE.ADD_WORKER)
                            )}
                        >
                            <AddWorkerIcon className="tranparent text-center text-gray-400" />
                        </button>
                    ))}
                </div>
            </div>
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
            >
                {typeModalWindow === MODAL_TYPE.ADD_CLIENT && <ClientModalTemplate
                    onSaveClientName={setTempClientName}
                    clientName={tempClientName}
                    onClose={handleCloseModal}
                    id={id} />}
                {typeModalWindow === MODAL_TYPE.ADD_WORKER && <WorkerModalTemplate day={day} />}
            </ModalWindow>
        </div >
    )
}
