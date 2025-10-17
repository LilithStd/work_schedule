'use client'

import { useGlobalStore } from "@/store/globalStore"
import ModalWindow from "./modalWindow"
import { useState } from "react"

type CellProps = {
    id: string
}

export default function Cell({ id }: CellProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [tempClientName, setTempClientName] = useState("")
    // const handleEditClientName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTempClientName(e.target.value)
    // }
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
            <button
                className={` w-full h-10  rounded-sm ${isOpen ? 'bg-fuchsia-600' : tempClientName.length > 0 ? 'bg-emerald-500 hover:bg-emerald-200' : 'bg-sky-500 hover:bg-sky-700'}`}
                onClick={handleOpenModal}
            >
                {tempClientName.length > 0 ? tempClientName : "edit"}
            </button>
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
