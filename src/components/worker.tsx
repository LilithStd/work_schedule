interface WorkerProps {
    name?: string;
    id: string;
}

export default function Worker({ name }: WorkerProps) {
    return (
        <div
            className="cursor-pointer bg-violet-600 m-1 rounded text-white"
            draggable
        >
            <p>
                {name ? name : 'worker'}
            </p>

        </div>
    )
}
