import React from 'react'
import AddWorkerIcon from '../../public/icons/user-plus.svg'
interface WorkerCellTypes {
    id?: string
}

export default function WorkerCell({ id }: WorkerCellTypes) {
    return (
        <div>
            {/* {id ? <p>{id}</p> : <AddWorkerIcon />} */}
            {<AddWorkerIcon />}
        </div>
    )
}
