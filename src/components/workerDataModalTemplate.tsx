'use client'

import { TYPE_WORKER_MODAL } from "@/consts/template";
import { useWorkersStore } from "@/store/workersStore"
import { WorkerDataTypes } from "@/utils/types"
import { useState } from "react"
import EditWheelIcon from '../../public/icons/settingWheel.svg'

interface WorkerDataModalTemplateInterfaceProps {
    onClose: () => void,
    workerEditData?: WorkerDataTypes,
    typeWorkerModal: TYPE_WORKER_MODAL;
}

export default function WorkerDataModalTemplate({ onClose, typeWorkerModal, workerEditData }: WorkerDataModalTemplateInterfaceProps) {
    const [statusChooseColor, setStatusChooseColor] = useState(false)
    const [editStatus, setEditStatus] = useState(false)
    const [workerNameTempData, setWorkerNameTempData] = useState('')
    const [workerSurnameTempData, setWorkerSurnameTempData] = useState('')
    const [workerData, setWorkerData] = useState<WorkerDataTypes>()
    //store
    const createWorkerData = useWorkersStore((state) => state.createWorkerData)
    // 
    const handleEditWorkerData = (title: string) => {
        setEditStatus(true)

    }
    const handleEndChangeWorkerData = () => {
        setEditStatus(false)
    }


    const inputElement = (title: string) => {
        console.log(workerNameTempData)
        return (
            <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder={title}
                value={editStatus ? workerNameTempData : title === ListTitle.name ? workerNameTempData : workerSurnameTempData}
                onChange={title === ListTitle.name ? handleEditWorkerName : handleEditWorkerSurname}
            />)
    }

    const ListTitle = {
        name: 'Имя',
        surname: 'Фамилия',
    }

    const changeColorElement = () => { }

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

        updateWorkerData(newWorker);
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

    const updateWorkerData = (workerUpdateData: WorkerDataTypes) => {
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




    return (
        <div className='w-full  text-black'>
            {/* <p>createWorkerDataModalTemplate</p> */}
            {typeWorkerModal === TYPE_WORKER_MODAL.NEW ? <div>
                <div className="flex gap-2">
                    {/* <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        placeholder="Имя"
                        value={workerNameTempData}
                        onChange={handleEditWorkerName}
                    /> */}
                    {
                        inputElement(ListTitle.name)
                    }
                    {
                        inputElement(ListTitle.surname)
                    }
                    {/* <input
                        type="text" className="border border-gray-300 rounded-md p-2 w-full" placeholder="Фамилия"
                        value={workerSurnameTempData}
                        onChange={handleEditWorkerSurname}
                    /> */}
                </div>

                <div className="flex justify-between m-6 ">
                    <button className={`${workerData?.additionalProperties?.color} border w-10 h-10 rounded`} onClick={handleChooseColor} ></button>
                    {statusChooseColor && chooseColorsData.map((color) => <div className={`${color} w-10 h-10 rounded hover:border-2`} key={color} onClick={() => {
                        updateWorkerData({ id: '', name: '', additionalProperties: { color: color } })
                        handleChooseColor()
                    }}></div>)}
                </div>
                <div className="flex gap-2">
                    <button
                        className="mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-1/2"
                        onClick={handleResetState}
                    >Reset</button>
                    <button
                        className="mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-1/2"
                        onClick={handleCreateWorker}
                    >Save</button>
                </div>
            </div> :
                <div>
                    <p>edit worker modal</p>
                    {workerEditData &&
                        <div className={`flex justify-center items-center flex-col gap-4`}>
                            <div className={`flex gap-2 items-center`}>
                                {editStatus ? inputElement(ListTitle.name) : <div>
                                    <h2>{workerEditData.name}</h2>
                                    <EditWheelIcon width={30} onClick={() => (handleEditWorkerData(ListTitle.name))} />
                                </div>}

                            </div>

                            {workerEditData.surname &&
                                <div className={`flex gap-2 items-center`}>
                                    <h2>{workerEditData.surname}</h2>
                                    <EditWheelIcon width={30} onClick={handleEditWorkerSurname} />
                                </div>
                            }

                        </div>
                    }
                </div>
            }



        </div>
    )
}
