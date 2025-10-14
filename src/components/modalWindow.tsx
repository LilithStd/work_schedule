interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ModalWindow({ isOpen, onClose, children }: ModalWindowProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <input type="text" className="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите текст..." />
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-1/2"
                >
                    Закрыть
                </button>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-1/2">Save</button>
            </div>
        </div>
    );
}
