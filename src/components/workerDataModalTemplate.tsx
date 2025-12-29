'use client'

import { THEME_COLORS, TYPE_EDIT_WORKER_DATA, TYPE_WORKER_MODAL } from "@/consts/template";
import { useWorkersStore } from "@/store/workersStore"
import { WorkerDataTypes } from "@/utils/types"
import { useEffect, useState } from "react"
import EditWheelIcon from '../../public/icons/settingWheel.svg'
import { useGlobalStore } from "@/store/globalStore";

interface WorkerDataModalTemplateInterfaceProps {
    onClose: () => void,
    workerEditData?: WorkerDataTypes,
    typeWorkerModal: TYPE_WORKER_MODAL;
}

export default function WorkerDataModalTemplate({ onClose, typeWorkerModal, workerEditData }: WorkerDataModalTemplateInterfaceProps) {
    const [statusChooseColor, setStatusChooseColor] = useState(false)
    const [editStatus, setEditStatus] = useState({ status: false, type: TYPE_EDIT_WORKER_DATA.NOTHING })

    const [workerNameTempData, setWorkerNameTempData] = useState('')
    const [workerSurnameTempData, setWorkerSurnameTempData] = useState('')
    const [workerData, setWorkerData] = useState<WorkerDataTypes>()
    //store
    const createWorkerData = useWorkersStore((state) => state.createWorkerData)
    const updateWorkerData = useWorkersStore((state) => state.updateWorkerData)
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 

    const handleEditWorkerData = (title: string, type: TYPE_EDIT_WORKER_DATA) => {
        setEditStatus((prev) => ({ ...prev, status: true, type: type }))

    }

    const handleEndChangeWorkerData = () => {
        const updated = {
            ...workerData!,
            name: workerNameTempData,
            surname: workerSurnameTempData,
        };

        setWorkerData(updated);
        handleUpdateWorkerData(updated);
        updateWorkerData(updated);
        setEditStatus((prev) => ({ ...prev, status: false, type: TYPE_EDIT_WORKER_DATA.NOTHING }));

    };


    const inputElement = (title: string) => (
        <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder={title}
            value={title === ListTitle.name ? workerNameTempData : workerSurnameTempData}
            onChange={title === ListTitle.name ? handleEditWorkerName : handleEditWorkerSurname}
        />
    );

    const ListTitle = {
        name: 'Имя',
        surname: 'Фамилия',
    }

    const changeColorElement = () => {
        return (
            <div className="flex justify-between m-6 ">
                <button className={`${workerData?.additionalProperties?.color} border w-10 h-10 rounded`} onClick={handleChooseColor} ></button>
                {statusChooseColor && chooseColorsData.map((color) => <div className={`${color} w-10 h-10 rounded hover:border-2`} key={color} onClick={() => {
                    handleUpdateWorkerData({ id: '', name: '', additionalProperties: { color: color } })
                    handleChooseColor()
                }}></div>)}
            </div>
        )
    }

    const chooseColorsData =
        ['bg-amber-300', 'bg-sky-300', 'bg-yellow-700', 'bg-teal-600', 'bg-rose-300']
    const handleChooseColor = () => {
        setStatusChooseColor(!statusChooseColor)
    }

    const handleCreateWorker = () => {
        const newWorker = {
            id: '',
            name: workerNameTempData,
            surname: workerSurnameTempData,
            additionalProperties: { color: workerData?.additionalProperties?.color ?? '' },
        };

        handleUpdateWorkerData(newWorker);
        createWorkerData(newWorker);
        onClose();
    };


    const handleResetState = () => {
        setWorkerNameTempData('')
        setWorkerSurnameTempData('')
        setWorkerData({ id: '', name: '', additionalProperties: { color: '' } })
    }


    const handleEditWorkerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkerNameTempData(e.target.value)
    }
    const handleEditWorkerSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkerSurnameTempData(e.target.value)
    }

    const handleUpdateWorkerData = (workerUpdateData: WorkerDataTypes) => {
        if (!workerData) {
            const worker = {
                id: '',
                name: '',
                additionalProperties: {
                    color: workerUpdateData.additionalProperties?.color ?? "bg-neutral-200"
                }
            }
            setWorkerData(worker)

        } else {
            setWorkerData((prev) => prev ? {
                ...prev, name: workerUpdateData.name, surname: workerUpdateData.surname ?? '', additionalProperties: {
                    ...prev.additionalProperties,
                    color: workerUpdateData.additionalProperties?.color ?? "bg-neutral-200"
                }
            } : prev);
        }
    }


    useEffect(() => {
        if (workerEditData) {
            setWorkerData(workerEditData);
            setWorkerNameTempData(workerEditData.name);
            setWorkerSurnameTempData(workerEditData.surname ?? '');
        }
    }, [workerEditData]);

    return (
        <div className={`w-full ${THEME_COLORS[currentThemeApp].textColor}  `}>
            {typeWorkerModal === TYPE_WORKER_MODAL.NEW ? <div>
                <div className="flex gap-2">
                    {
                        inputElement(ListTitle.name)
                    }
                    {
                        inputElement(ListTitle.surname)
                    }
                </div>
                {changeColorElement()}
                <div className="flex gap-2">
                    <button
                        className={`mt-4 py-2 ${THEME_COLORS[currentThemeApp].button} rounded ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                        onClick={handleResetState}
                    >Reset</button>
                    <button
                        className={`mt-4 py-2 ${THEME_COLORS[currentThemeApp].button} rounded ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                        onClick={handleCreateWorker}
                    >Save</button>
                </div>
            </div> :
                <div>
                    <p>edit worker modal</p>
                    {workerEditData &&
                        <div className={`flex justify-center items-center flex-col gap-4`}>
                            <div className={`flex gap-2 items-center`}>
                                {editStatus && editStatus.type === TYPE_EDIT_WORKER_DATA.NAME ?
                                    <div>
                                        {inputElement(ListTitle.name)}
                                        <div className="flex gap-2">
                                            <button
                                                className={`mt-4 py-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                                                onClick={handleResetState}
                                            >Reset2</button>
                                            <button
                                                className={`mt-4 py-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                                                onClick={() => handleEndChangeWorkerData()}
                                            >Save</button>
                                        </div>
                                    </div> : <div className="flex gap-2 items-center">
                                        <h2>{workerEditData.name}</h2>
                                        <EditWheelIcon width={30} onClick={() => (
                                            handleEditWorkerData(ListTitle.name, TYPE_EDIT_WORKER_DATA.NAME),
                                            setWorkerNameTempData(workerEditData.name)

                                        )
                                        } />
                                    </div>}

                            </div>
                            {editStatus && editStatus.type === TYPE_EDIT_WORKER_DATA.SURNAME ?
                                <div>
                                    {inputElement(ListTitle.surname)}
                                    <div className="flex gap-2">
                                        <button
                                            className={`mt-4 py-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                                            onClick={handleResetState}
                                        >Reset</button>
                                        <button
                                            className={`mt-4 py-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                                            onClick={() => handleEndChangeWorkerData()}
                                        >Save</button>
                                    </div>
                                </div> : <div className="flex gap-2 items-center">
                                    <h2>{workerEditData.surname}</h2>
                                    <EditWheelIcon width={30} onClick={() => (
                                        handleEditWorkerData(ListTitle.surname, TYPE_EDIT_WORKER_DATA.SURNAME),
                                        setWorkerSurnameTempData(workerEditData.surname || '')

                                    )
                                    } />
                                </div>}
                            {editStatus && editStatus.type === TYPE_EDIT_WORKER_DATA.COLOR ? <div>
                                <div className="flex gap-2">
                                    {changeColorElement()}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className={`mt-4 py-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                                        onClick={handleResetState}
                                    >Reset</button>
                                    <button
                                        className={`mt-4 py-2 rounded-xl ${THEME_COLORS[currentThemeApp].button} ${THEME_COLORS[currentThemeApp].hover.changeColor} w-1/2`}
                                        onClick={() => handleEndChangeWorkerData()}
                                    >Save</button>
                                </div>
                            </div> :
                                <div className="flex  items-center">
                                    <div className={`${workerData?.additionalProperties?.color} w-10 h-10 rounded hover:border-2`} onClick={() => handleEditWorkerData('color', TYPE_EDIT_WORKER_DATA.COLOR)}></div>
                                    <EditWheelIcon width={30} onClick={() => handleEditWorkerData('color', TYPE_EDIT_WORKER_DATA.COLOR)} />
                                </div>
                            }

                        </div>

                    }
                </div>
            }



        </div>
    )
}
