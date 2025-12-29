'use client'
import dayjs from 'dayjs'
import React, { useRef, useState } from 'react'
import ModalWindow from './modalWindow'
import { useGlobalStore } from '@/store/globalStore'
import { THEME_COLORS } from '@/consts/template'

export default function CurrentData() {
    const [isOpen, setIsOpen] = useState(false)

    // stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 
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
            <div className={`p-4`}>
                <h2>Current Data</h2>
                <p>{currentData}</p>
                <div>
                    <button onClick={handleCloseModal} className={`mt-4 py-2 ${THEME_COLORS[currentThemeApp].button} rounded ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}>close</button>
                </div>
            </div>
        )
    }

    return (
        <div className={`flex flex-col items-center justify-center rounded-xl cursor-pointer ${THEME_COLORS[currentThemeApp].textColor} ${THEME_COLORS[currentThemeApp].button}  w-60 text-center m-1`} ref={anchorRef} onClick={handleOpenModal}>
            <h1>Current data</h1>
            <h2>
                {currentData}
            </h2>
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
                anchorRef={anchorRef}>
                {dataModalModalTemplate()}
            </ModalWindow>
        </div>

    )
}
