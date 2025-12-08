'use client'
import React, { useMemo } from "react";
import { useRegistationStore } from "@/store/registrationStore";
import { THEME, THEME_COLORS, timer, week, weekTranslated } from "@/consts/template";
import Cell from "./cell";
import WorkersList from "./workersList";
import { useGlobalStore } from "@/store/globalStore";
import CurrentData from "./currentData";
import { indents, shadow } from "@/consts/globalStyles";
import { translateObjectValues } from "@/utils/helpersFunctions";
import AddCellIcon from '../../public/icons/SquaresPlus.svg'


export default function TableCell() {
    //store
    const registrationData = useRegistationStore(
        (state) => state.registartionData
    );
    const addRegistrationData = useRegistationStore((state) => state.createRegistrationDataCell)
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const additionalAppFunctional = useMemo(() => {
        return (
            <div className={`flex justify-between bg-sky-600  rounded-xl ${indents.subContainer.margin} ${indents.subContainer.padding}`}>

                <h2 className="flex items-center justify-center rounded-xl bg-sky-500 p-2 w-60 text-center">
                    Workers Table
                </h2 >
                <CurrentData />
            </div >)
    }, [])

    const tableContent = useMemo(() => {
        return timer.map((time) => (
            <React.Fragment key={time}>
                <div className={`rounded-xl min-h-10 justify-center flex items-center ${indents.container.margin} text-center bg-sky-500`}>
                    {time}
                </div>

                {registrationData.map((day) => {
                    const slot = day.registrationTime.find((t) => t.time === time);

                    return (
                        <div
                            key={`${day.day}-${time}`}
                            className={`rounded-xl bg-white text-center ${indents.container.margin}`}
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
                                <span className=" italic text-sm">empty</span>
                            )}
                            <button className={`p-2 m-2 rounded-xl bg-indigo-300 w-fit hover:bg-violet-300`} onClick={() => addRegistrationData({ day: day.day, time })}>

                                <AddCellIcon width={30} height={30} />
                            </button>


                        </div>
                    );
                })}

            </React.Fragment>
        ));
    }, [registrationData, timer]);

    return (
        <div className={``}>
            {additionalAppFunctional}
            <div className="grid grid-cols-8 m-1">
                <div className="m-1 rounded-xl bg-sky-600 flex items-center justify-center">
                    Time / Day
                </div>
                {weekTranslated.map((day) => (
                    <div
                        key={day.label}
                        className={`rounded-xl min-h-10 justify-center flex items-center ${indents.container.margin} text-center bg-sky-500`}
                    >
                        <p className={``}>
                            {day.translate[currentLanguageApp]}
                        </p>

                    </div>
                ))}

                <WorkersList />
                {tableContent}
            </div>
        </div>
    );
}


