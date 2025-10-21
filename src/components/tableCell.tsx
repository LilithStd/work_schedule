import { timer, week } from "@/consts/template";
import Cell from "./cell";
import React from "react";
import { nanoid } from "nanoid";
import WorkersList from "./workersList";

export default function TableCell() {

    return (
        <div className="bg-sky-700 w-full p-4 text-white">
            <h2 className="text-center mb-4">table_cell</h2>
            <div className="grid grid-cols-8 border border-black">
                {/* Заголовки дней недели */}
                <div className="border border-black bg-sky-600 flex items-center justify-center">
                    days of week
                </div>

                {week.map((day) => (
                    <div
                        key={day}
                        className="border border-black text-center bg-sky-500"
                    >
                        {day}
                    </div>
                ))}
                <WorkersList />
                {timer.map((time, rowIndex) => (
                    <React.Fragment key={time}>
                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>
                        {week.map((day, colIndex) => (
                            <div
                                key={`${day}-${time}`}
                                className="border border-black bg-white text-black text-center"
                            >
                                {/* Например, три клиента в каждой ячейке */}
                                {Array.from({ length: 3 }).map(() => {
                                    const id = nanoid();
                                    return <Cell key={id} id={id} day={day} />;
                                })}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
