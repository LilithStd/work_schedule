'use client'
import { THEME_COLORS } from "@/consts/template";
import { useGlobalStore } from "@/store/globalStore";
import { use, useState } from "react";

interface ClientModalTemplateProps {
    clientName?: string;
    id: string;
    onClose: () => void;
    onSaveClientName: (setTempClientName: string) => void;
}

export default function ClientModalTemplate({ onSaveClientName, clientName, onClose, id }: ClientModalTemplateProps) {
    const [tempClientName, setTempClientName] = useState('');
    const [tempSurname, setTempSurname] = useState('');
    //stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp);

    //
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
            <div className={`flex flex-col gap-4 mt-4`}>
                <input
                    type="text"
                    onChange={handleEditClientName}
                    value={tempClientName}
                    className={`border ${THEME_COLORS[currentThemeApp].inputContainer} border-gray-300 rounded-md p-2 w-full`} placeholder="Name"
                />
                <input
                    type="text"
                    onChange={handleEditClientName}
                    value={tempClientName}
                    className={`border ${THEME_COLORS[currentThemeApp].inputContainer} border-gray-300 rounded-md p-2 w-full`} placeholder="Surname"
                />
            </div>

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
