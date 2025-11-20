'use client'

import { useGlobalStore } from "@/store/globalStore"
import ModalWindow from "./modalWindow"
import { useMemo, useRef, useState } from "react"
import Client from "./client"
import ClientModalTemplate from "./clientModalTemplate"
import { MODAL_TYPE, TYPE_WORKER_MODAL } from "@/consts/template"
import WorkerModalTemplate from "./workerModalTemplate"
import { useRegistationStore } from "@/store/registrationStore"
import WorkerCell from "./workerCell"


type CellProps = {
    id: string,
    day: string,
    time: string
}

export default function Cell({ id, day, time }: CellProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeAnchor, setActiveAnchor] =
        useState<React.RefObject<HTMLElement | null> | undefined>(undefined);
    const anchorRefWorker = useRef<HTMLDivElement>(null);
    const anchorRefClient = useRef<HTMLButtonElement>(null);
    const [currentCellId, setCurrentId] = useState('')
    const [typeModalWindow, setTypeModalWindow] = useState<MODAL_TYPE>(MODAL_TYPE.ADD_CLIENT)
    const [tempClientName, setTempClientName] = useState("")
    const modalStatus = useGlobalStore((state) => state.modalOpenStatus)
    const setModalStatus = useGlobalStore((state) => state.setModalOpenStatus)
    const resetModalStatus = useGlobalStore((state) => state.resetSetOpenStatus)
    const registrationData = useRegistationStore(state => state.registartionData);

    const cellData = useMemo(() => {
        const dayData = registrationData.find(d => d.day === day);
        const timeData = dayData?.registrationTime.find(t => t.time === time);
        return timeData?.data.find(c => c.id === id);
    }, [registrationData, day, time, id]);


    const handleOpenModal = () => {
        if (modalStatus.status) return
        setIsOpen(true)
        setModalStatus({ status: true, id: id })

    }
    const handleCloseModal = () => {
        setIsOpen(false)
        resetModalStatus()

    }
    const onClickCallBack = (id: string) => {
        handleOpenModal()
        setTypeModalWindow(MODAL_TYPE.ADD_WORKER)
        setCurrentId(id)
    }

    return (
        <div className="m-2">
            <div className="flex flex-col xl:flex-row gap-2">
                <button
                    className={`xl:w-1/2 row-start-1 row-end-2  min-h-10 rounded-xl ${isOpen && typeModalWindow === MODAL_TYPE.ADD_CLIENT ? 'bg-fuchsia-600' : tempClientName.length > 0 ? 'bg-emerald-500 hover:bg-emerald-200' : 'bg-sky-500 hover:bg-sky-700'}`}
                    onClick={() => (
                        handleOpenModal(),
                        setTypeModalWindow(MODAL_TYPE.ADD_CLIENT),
                        setActiveAnchor(anchorRefClient)
                    )}
                    ref={anchorRefClient}
                >
                    <Client name={tempClientName} />
                </button>
                <div className="xl:w-1/2 flex flex-col gap-2 shadow-lg">
                    {cellData?.cells.map((item) => (
                        <div role="button" key={item.cell} className={`rounded-xl shadow-lg flex items-center justify-center ${isOpen && item.cell === currentCellId && typeModalWindow === MODAL_TYPE.ADD_WORKER ? 'bg-fuchsia-600' : 'bg-sky-100  hover:bg-emerald-200'} `}
                            onClick={() => (
                                onClickCallBack(item.cell),
                                setActiveAnchor(anchorRefWorker)
                            )}
                            ref={anchorRefWorker}
                        >
                            {<WorkerCell cellId={id} id={item.cell} day={day} time={time} />}
                        </div>
                    ))}
                </div>
            </div>
            <ModalWindow
                isOpen={isOpen}
                onClose={handleCloseModal}
                anchorRef={activeAnchor}
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
                        onClose={handleCloseModal}
                    />
                }
            </ModalWindow>
        </div >
    )
}
