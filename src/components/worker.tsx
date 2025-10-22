import { WorkerTypes } from "@/consts/template";

interface WorkerProps {
    name: string;
    id: string;
    callBack?: ({ name, id }: WorkerTypes) => void;
}

export default function Worker({ name, id, callBack }: WorkerProps) {
    return (
        <div
            className="cursor-pointer bg-violet-600 m-1 rounded text-white justify-center items-center flex p-2 "
            draggable="true"
            onDragStart={(e) => {
                e.dataTransfer.setData("application/json", JSON.stringify({ name, id }));
            }}
        >
            <p>
                {name ? name : 'worker'}
            </p>

        </div>
    )
}
