'use client'

import { useGlobalStore } from "@/store/globalStore"
import ModalWindow from "./modalWindow"
import { useState } from "react"

type CellProps = {
    id: string
}

export default function Cell({ id }: CellProps) {
    const [isOpen, setIsOpen] = useState(false)
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
        <div>
            <button
                className="bg-sky-500 w-full h-6 hover:bg-sky-700 rounded-sm"
                onClick={handleOpenModal}
            >
                edit
            </button>
            <ModalWindow isOpen={isOpen} onClose={handleCloseModal}>
                <h2 className="text-xl font-semibold text-center mb-2">Привет!</h2>
                <p className="text-center text-gray-600">
                    {`Это модальное окно для ячейки с ID: ${id}`}
                </p>
            </ModalWindow>
        </div>
    )
}
