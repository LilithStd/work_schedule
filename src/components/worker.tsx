'use client'
import { THEME_COLORS, WorkerTypes } from "@/consts/template";
import { WorkerDataTypes } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
interface WorkerProps {
    worker: WorkerDataTypes,
    currentTheme: 'LIGHT' | 'DARK',
    callBack?: ({ name, id }: WorkerTypes) => void;
}

export default function Worker({ worker, currentTheme, callBack }: WorkerProps) {
    const [changeWorkerData, setChangeWorkerData] = useState<WorkerDataTypes>(worker);
    const ref = useRef<HTMLDivElement>(null);
    const [short, setShort] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // }
    // console.log(worker)

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Проверка переполнения
        if (el.scrollWidth > el.clientWidth) {
            setShort(true);
        } else {
            setShort(false);
        }
    }, []);

    return (
        <div
            className={`cursor-pointer sm:flex-col xl:flex-row ${THEME_COLORS[currentTheme].hover.changeColor}  ${worker.additionalProperties?.color ?? 'bg-violet-600'}   rounded-xl  justify-center items-center flex p-2 gap-2 `}
            draggable="true"

            onDragStart={(e) => {
                e.dataTransfer.setData("application/workerId", worker.id);
            }}
        >
            <p className={`flex-grow text-center justify-center items-center`}>
                {worker.name ? worker.name : 'worker'}
            </p>
            {worker.surname && worker.surname !== '' &&
                <p className={`flex-grow text-center justify-center items-center`}>
                    {worker.surname && worker.surname !== '' ? worker.surname : ''}
                </p>
            }

        </div >
    )
}
