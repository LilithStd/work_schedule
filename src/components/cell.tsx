'use client'

import { useGlobalStore } from "@/store/globalStore"
import ModalWindow from "./modalWindow"
import { useState } from "react"
import Client from "./client"

import AddWorkerIcon from "../../public/icons/user-plus.svg"

type CellProps = {
    id: string
}

export default function Cell({ id }: CellProps) {
    const [isOpen, setIsOpen] = useState(false)
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
                    className={`xl:w-1/2 row-start-1 row-end-2  min-h-10 rounded-xl ${isOpen ? 'bg-fuchsia-600' : tempClientName.length > 0 ? 'bg-emerald-500 hover:bg-emerald-200' : 'bg-sky-500 hover:bg-sky-700'}`}
                    onClick={handleOpenModal}
                >
                    <Client name={tempClientName} />
                </button>
                <div className="xl:w-1/2 flex flex-col gap-2">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <div key={idx} className="flex items-center justify-center  bg-sky-100 min-h-10 rounded-xl ">
                            <p className="tranparent text-center text-gray-400">
                                <AddWorkerIcon />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <ModalWindow
                isOpen={isOpen}
                clientName={tempClientName}
                onClose={handleCloseModal}
                onSaveClientName={setTempClientName}>
                <h2 className="text-xl font-semibold text-center mb-2">modal window</h2>
                <p className="text-center text-gray-600">
                    {`Это модальное окно для ячейки с ID: ${id}`}
                </p>
            </ModalWindow>
        </div>
    )
}
