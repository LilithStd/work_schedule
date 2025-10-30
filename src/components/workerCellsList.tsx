import { cellsTypes } from "@/store/registrationStore"
import WorkerCell from "./workerCell"

interface CellsListType {
    cells: cellsTypes[]
}

export default function WorkerCellsList({ cells }: CellsListType) {
    return (
        <>
            {
                cells.map((cell) => <WorkerCell key={cell.cell} id={cell.cell} />)
            }
        </>

    )
}
