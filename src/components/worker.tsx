import { WorkerTypes } from "@/consts/template";
import { WorkerDataTypes } from "@/utils/types";

interface WorkerProps {
    worker: WorkerDataTypes,
    callBack?: ({ name, id }: WorkerTypes) => void;
}

export default function Worker({ worker, callBack }: WorkerProps) {
    console.log(worker)
    return (
        <div
            className={`cursor-pointer ${worker.additionalProperties?.color ?? 'bg-violet-600'}  m-1 rounded text-white justify-center items-center flex p-2 `}
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData("application/json", JSON.stringify(worker));
            }}
        >
            <p>
                {worker.name ? worker.name : 'worker'}
            </p>

        </div>
    )
}
