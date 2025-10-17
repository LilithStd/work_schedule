import { timer, week } from "@/consts/template";
import Cell from "./cell";
import React from "react";
import { nanoid } from "nanoid";
import Worker from "./worker";

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
                {/* Пустая ячейка в левом верхнем углу */}
                <div className="border border-black grid grid-cols-1 bg-sky-600  text-center justify-center">
                    <h2 className="text-center">workers</h2>
                    {Array.from({ length: 4 }).map(() => {
                        const id = nanoid();
                        return <Worker key={id} id={id} />;
                    })}

                </div>

                {Array.from({ length: 7 }).map((_, index) => (
                    <div
                        key={index}
                        className="border border-black bg-sky-600 min-h-40"
                    >

                    </div>
                ))}


                {/* Временные ряды */}
                {timer.map((time, rowIndex) => (
                    <React.Fragment key={time}>
                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>

                        {/* Ячейки на каждый день недели */}
                        {week.map((day, colIndex) => (
                            <div
                                key={`${day}-${time}`}
                                className="border border-black bg-white text-black text-center"
                            >
                                {/* Например, три клиента в каждой ячейке */}
                                {Array.from({ length: 3 }).map(() => {
                                    const id = nanoid();
                                    return <Cell key={id} id={id} />;
                                })}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
