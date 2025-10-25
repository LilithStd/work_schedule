'use client'
import { timer, week } from "@/consts/template";
import Cell from "./cell";
import React from "react";
import { nanoid } from "nanoid";
import WorkersList from "./workersList";
import { useRegistationStore } from "@/store/registrationStore";

export default function TableCell() {
    const registrationData = useRegistationStore(state => state.registartionData)
    // const timer = registrationData.map((element) => element.registrationTime.map((item) => item.time))
    // console.log(timer)
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
                <WorkersList />
                {/* {timer.map((time) => (
                    <React.Fragment key={time}>
                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>
                        {registrationData.map((element) => (
                            <div key={element.day}>
                                {element.registrationTime.map((cellData) => (
                                    <div key={cellData.time}>
                                        {cellData.data.map((item) => (
                                            <div
                                                key={item.id}
                                                className="border border-black bg-white text-black text-center"
                                            >
                                                {
                                                    <Cell id={item.id} day={element.day} time={time} />
                                                }
                                                {Array.from({ length: cellData.data.length }).map(() => {
                                                    const id = nanoid();
                                                    return <Cell key={id} id={item.id} day={element.day} time={time} />;
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </React.Fragment>
                ))} */}
                {timer.map((time) => (
                    <React.Fragment key={time}>
                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>
                        {registrationData.map((element) => {
                            const timeSlot = element.registrationTime.find(
                                (cellData) => cellData.time === time
                            );
                            const cells = element.registrationTime.find((cellsData) => cellsData.time === time)?.data
                            // console.log(timeSlot, cells)

                            return (
                                <div
                                    key={`${element.day}-${time}`}
                                    className="border border-black bg-white text-black text-center"
                                >
                                    {timeSlot?.data?.length ? (
                                        timeSlot.data.map((item) => (
                                            <Cell key={item.id} id={item.id} day={element.day} time={time} data={cells ?? []} />
                                        ))
                                    ) : (
                                        <span className="text-gray-400 italic text-sm">empty</span>
                                    )}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
                {/* {timer.map((time, rowIndex) => (
                    <React.Fragment key={time}>
                        <div className="border border-black bg-sky-600 flex items-center justify-center">
                            {time}
                        </div>
                        {week.map((day, colIndex) => (
                            <div
                                key={`${day}-${time}`}
                                className="border border-black bg-white text-black text-center"
                            >
                                {Array.from({ length: 3 }).map(() => {
                                    const id = nanoid();
                                    return <Cell key={id} id={id} day={day} time={time} />;
                                })}
                            </div>
                        ))}
                    </React.Fragment>
                ))} */}
            </div>
        </div>
    );
}
