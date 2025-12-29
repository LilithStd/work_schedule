'use client'
import { THEME_COLORS } from "@/consts/template";
import { useRouter } from 'next/navigation';
import { useGlobalStore } from "@/store/globalStore";
import { useState } from "react";
import { APP_ROUTES } from "@/consts/globalConsts";

interface ClientModalTemplateProps {
    clientName?: string;
    id: string;
    onClose: () => void;
    onSaveClientName: (setTempClientName: string) => void;
}

export default function ClientModalTemplate({ onSaveClientName, clientName, onClose, id }: ClientModalTemplateProps) {
    const router = useRouter();
    const [tempClientName, setTempClientName] = useState('');
    const [tempSurname, setTempSurname] = useState('');
    //stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp);

    //
    const handleEditClientName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempClientName(e.target.value)
    }

    const handleRedirectToNewClient = () => {
        onClose();
        router.push(APP_ROUTES.CLIENTS)
    }
    const handleRedirectToClientPage = () => {
        onClose();
        router.push(APP_ROUTES.CLIENTS)
    }

    if (clientName && tempClientName === '') {
        setTempClientName(clientName);
    }

    // const handleClose = () => {
    //     onClose();
    //     setTempClientName("");
    // }


    return (
        <div className={``}>
            {/* <div className={`flex flex-col gap-4 mt-4`}>
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
            </div> */}

            <div className="gap-2 flex">
                <button
                    onClick={handleRedirectToNewClient}
                    className={`${THEME_COLORS[currentThemeApp].button} mt-4 py-2 rounded-lg ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                >
                    Create New CLient
                </button>
                <button
                    // onClick={() => {
                    //     handleClose();
                    //     if (onSaveClientName) { onSaveClientName(tempClientName) };
                    // }}
                    onClick={handleRedirectToClientPage}
                    className={`${THEME_COLORS[currentThemeApp].button} mt-4 py-2 rounded-lg ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                >Go to Clients Page</button>
            </div>
        </div>
    )
}
