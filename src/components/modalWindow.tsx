import { useState } from "react";

interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    clientName?: string;
    onSaveClientName: (setTempClientName: string) => void;
    children: React.ReactNode;
}

export default function ModalWindow({ isOpen, onClose, onSaveClientName, clientName, children }: ModalWindowProps) {
    const [tempClientName, setTempClientName] = useState('');
    const handleEditClientName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempClientName(e.target.value)
    }

    if (clientName && tempClientName === '') {
        setTempClientName(clientName);
    }
    const handleClose = () => {
        onClose();
        setTempClientName("");
    }
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
                <input
                    type="text"
                    onChange={handleEditClientName}
                    value={tempClientName}
                    className="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите текст..." />
                <div className="gap-2 flex">
                    <button
                        onClick={handleClose}
                        className="mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-1/2"
                    >
                        Закрыть
                    </button>
                    <button
                        onClick={() => {
                            handleClose();
                            if (onSaveClientName) { onSaveClientName(tempClientName) };
                        }}
                        className="mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-1/2"
                    >Save</button>
                </div>

            </div>
        </div>
    );
}
