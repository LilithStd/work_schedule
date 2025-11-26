'use client'
import dayjs from 'dayjs'
import React, { useRef, useState } from 'react'
import ModalWindow from './modalWindow'

export default function CurrentData() {
    const [isOpen, setIsOpen] = useState(false)
    const anchorRef = useRef<HTMLDivElement>(null);
    const currentData = dayjs().format(('DD/MM/YYYY'))

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const dataModalModalTemplate = () => {
        return (
            <div className={`text-black p-4`}>
                <h2>Current Data</h2>
                <p>{currentData}</p>
                <div>
                    <button onClick={handleCloseModal} className="mt-4 py-2 bg-blue-600  rounded hover:bg-blue-700 w-1/2">close</button>
                </div>
            </div>
        )
    }

    return (
        <div role='button' className="flex flex-col items-center justify-center rounded-xl bg-sky-500 w-60 text-center m-1" ref={anchorRef} onClick={handleOpenModal}>
            <h2>Current data</h2>
            <h2 >
                {currentData}
            </h2>
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
                anchorRef={anchorRef}>
                {dataModalModalTemplate()}
                {/* <p>test</p> */}
            </ModalWindow>
        </div>

    )
}
