'use client'
import { timer, week } from "@/consts/template";
import Cell from "./cell";
import React from "react";
import WorkersList from "./workersList";
import { useRegistationStore } from "@/store/registrationStore";

export default function TableCell() {
    const registrationData = useRegistationStore((state) => state.registartionData);

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
                {timer.map((time) => (
                    <React.Fragment key={time}>

                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>


                        {/* {registrationData.map((dayItem) => {
                            const timeSlot = dayItem.registrationTime.find(
                                (slot) => slot.time === time
                            );

                            return (
                                <div
                                    key={`${dayItem.day}-${time}`}
                                    className="border border-black bg-white text-black text-center"
                                >
                                    {timeSlot?.data?.length ? (
                                        timeSlot.data.map((item) => (
                                            <Cell
                                                key={item.id}
                                                id={item.id}
                                                day={dayItem.day}
                                                time={time}
                                                cells={timeSlot.data}
                                            />
                                        ))
                                    ) : (
                                        <span className="text-gray-400 italic text-sm">
                                            empty
                                        </span>
                                    )}
                                </div>
                            );
                        })} */}
                        {registrationData.map((day) => {
                            const slot = day.registrationTime.find((t) => t.time === time);
                            return (
                                <div
                                    key={`${day.day}-${time}`}
                                    className="border border-black bg-white text-black text-center"
                                >
                                    {slot?.data.map((item) => (
                                        <Cell
                                            key={item.id}
                                            id={item.id}
                                            day={day.day}
                                            time={time}
                                            cells={item.cells}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

