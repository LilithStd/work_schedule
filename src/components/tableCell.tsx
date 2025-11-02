'use client'
import React, { useMemo } from "react";
import { useRegistationStore } from "@/store/registrationStore";
import { timer, week } from "@/consts/template";
import Cell from "./cell";
import WorkersList from "./workersList";


export default function TableCell() {
    const registrationData = useRegistationStore(
        (state) => state.registartionData
    );

    const tableContent = useMemo(() => {
        return timer.map((time) => (
            <React.Fragment key={time}>
                <div className="border border-black bg-sky-600 flex items-center justify-center">
                    {time}
                </div>

                {registrationData.map((day) => {
                    const slot = day.registrationTime.find((t) => t.time === time);

                    return (
                        <div
                            key={`${day.day}-${time}`}
                            className="border border-black bg-white text-black text-center"
                        >
                            {slot?.data?.length ? (
                                slot.data.map((item) => (
                                    <Cell
                                        key={item.id}
                                        id={item.id}
                                        day={day.day}
                                        time={time}
                                    />
                                ))
                            ) : (
                                <span className="text-gray-400 italic text-sm">empty</span>
                            )}
                        </div>
                    );
                })}
            </React.Fragment>
        ));
    }, [registrationData, timer]);

    return (
        <div className="bg-sky-700 w-full p-4 text-white">
            <h2 className="text-center mb-4">table_cell</h2>
            <div className="grid grid-cols-8 border border-black">
                <div className="border border-black bg-sky-600 flex items-center justify-center">
                    Time / Day
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
                {tableContent}
            </div>
        </div>
    );
}


