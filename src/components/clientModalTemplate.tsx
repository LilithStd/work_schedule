import { useState } from "react";

interface ClientModalTemplateProps {
    clientName?: string;
    id: string;
    onClose: () => void;
    onSaveClientName: (setTempClientName: string) => void;
}

export default function ClientModalTemplate({ onSaveClientName, clientName, onClose, id }: ClientModalTemplateProps) {
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

    return (
        <>
            {/* <h2 className="text-xl font-semibold text-center mb-2">modal window</h2> */}
            {/* <p className="text-center text-gray-600">
                {`Это модальное окно для ячейки с ID: ${id}`}
            </p> */}
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
        </>
    )
}
