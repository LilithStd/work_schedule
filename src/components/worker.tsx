interface WorkerProps {
    name?: string;
    id: string;
    callBack?: (id: string) => void;
}

export default function Worker({ name, id, callBack }: WorkerProps) {
    return (
        <div
            className="cursor-pointer bg-violet-600 m-1 rounded text-white"
            draggable="true"
            onDragStart={(e) => {
                console.log('drag start', id);
                e.dataTransfer.setData("text/plain", id);
                // if (callBack) {
                //     callBack(id);
                // }
            }}
        >
            <p>
                {name ? name : 'worker'}
            </p>

        </div>
    )
}
