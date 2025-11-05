'use client'
import React, { useMemo } from "react";
import { useRegistationStore } from "@/store/registrationStore";
import { THEME, timer, week } from "@/consts/template";
import Cell from "./cell";
import WorkersList from "./workersList";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import { useGlobalStore } from "@/store/globalStore";
import dayjs from "dayjs";
import CurrentData from "./currentData";


export default function TableCell() {
    const registrationData = useRegistationStore(
        (state) => state.registartionData
    );

    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    const dark = 'bg-slate-300'
    const additionalAppFunctional = useMemo(() => {
        return (
            <div className="flex justify-between">
                <h2 className="flex items-center justify-center rounded-xl bg-sky-600 w-60 text-center m-1">
                    Workers Table
                </h2 >
                <CurrentData />
                <div className="flex justify-end">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div >)
    }, [])
    const tableContent = useMemo(() => {
        return timer.map((time) => (
            <React.Fragment key={time}>
                <div className="rounded-xl min-h-10 justify-center flex items-center m-1 text-center bg-sky-500">
                    {time}
                </div>

                {registrationData.map((day) => {
                    const slot = day.registrationTime.find((t) => t.time === time);

                    return (
                        <div
                            key={`${day.day}-${time}`}
                            className="rounded-xl bg-white text-black text-center m-1"
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
        <div className={` ${currentThemeApp === THEME.LIGHT ? dark : 'bg-stone-800'} p-6`}>
            {additionalAppFunctional}
            <div className="grid grid-cols-8">
                <div className="m-1 rounded-xl bg-sky-600 flex items-center justify-center">
                    Time / Day
                </div>
                {week.map((day) => (
                    <div
                        key={day}
                        className="rounded-xl min-h-10 justify-center flex items-center m-1 text-center bg-sky-500"
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


