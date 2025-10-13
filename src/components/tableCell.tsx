import { timer, week } from "@/consts/template";
import { setCells } from "@/utils/helpersFunctions";
import Cell from "./cell";
import React from "react";

const cells = setCells(7, <Cell />)
const clientsPerDay = setCells(3, <Cell />)

export default function TableCell() {

    return (
        <div className="bg-sky-700 w-full p-4 text-white">
            <h2 className="text-center mb-4">table_cell</h2>


            <div className="grid grid-cols-8 border border-black">


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


                {timer.map((time, rowIndex) => (
                    <React.Fragment key={time}>

                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>


                        {cells.map((cell, cellIndex) => (
                            <div
                                key={`${rowIndex}-${cellIndex}`}
                                className="border border-black bg-white text-black  items-center justify-center text-center"
                            >
                                {clientsPerDay.map((client, index) => (
                                    <div key={index} className="">
                                        {client}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
