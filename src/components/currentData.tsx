'use client'
import dayjs from 'dayjs'
import React, { useRef, useState } from 'react'
import ModalWindow from './modalWindow'

export default function CurrentData() {
    const [isOpen, setIsOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement>(null);
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
                    <button onClick={handleCloseModal}>close</button>
                </div>
            </div>
        )
    }

    return (
        <button className="flex flex-col items-center justify-center rounded-xl bg-sky-500 w-60 text-center m-1" ref={anchorRef} onClick={handleOpenModal}>
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
        </button>

    )
}
