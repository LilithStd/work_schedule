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
                className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
}
