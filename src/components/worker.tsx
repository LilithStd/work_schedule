'use client'
import { WorkerTypes } from "@/consts/template";
import { WorkerDataTypes } from "@/utils/types";
interface WorkerProps {
    worker: WorkerDataTypes,
    callBack?: ({ name, id }: WorkerTypes) => void;
}

export default function Worker({ worker, callBack }: WorkerProps) {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // }

    return (
        <div
            className={`cursor-pointer ${worker.additionalProperties?.color ?? 'bg-violet-600'}   rounded-xl  justify-center items-center flex p-2 text-black `}
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData("application/json", JSON.stringify(worker));
            }}
        >
            <p className={`flex-grow text-center justify-center items-center`}>
                {worker.name ? worker.name : 'worker'}
            </p>
            {/* <div className={`cursor-pointer flex justify-end items-end`

            } onClick={handleOpenModal}>
                <EditSettingWheelIcon width={20} />
            </div> */}
        </div >
    )
}
