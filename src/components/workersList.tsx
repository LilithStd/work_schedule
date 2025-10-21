'use client';
import { nanoid } from 'nanoid';
import React, { use, useState } from 'react'
import Worker from './worker';
import { week, workerListByDayTemplate, workersTest, WorkerTypes } from '@/consts/template';
import { useWorkersStore } from '@/store/workersStore';

export type WorkersListProps = {
    day: string;
    workers: WorkerTypes[];
}

export default function WorkersList() {
    const [workerDragged, setWorkerDragged] = useState<WorkerTypes>();
    const [workerListByDay, setWorkerListByDay] = useState<WorkersListProps[]>(workerListByDayTemplate);

    const setWorkersListbyDay = useWorkersStore((state) => state.setWorkerListByDay);

    const workerListByDayStore = useWorkersStore((state) => state.workerListByDay);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        const worker: WorkerTypes = JSON.parse(data) as WorkerTypes;
        setWorkersListbyDay({ workers: worker, day: day });
        // setWorkerListByDay((prev) => prev.map((item) => {
        //     if (item.day === day) {
        //         if (item.workers.find(workers => workers.id === worker.id)) {
        //             return item;
        //         }
        //         return { day: item.day, workers: [...item.workers, worker] };
        //     }
        //     return item;
        // }));
    }
    return (
        <>
            <div className="border border-black bg-sky-600 text-center justify-center">
                <h2 className="text-center">workers</h2>
                {workersTest.map((item) => {
                    const id = nanoid();
                    return <Worker key={id} id={item.id} callBack={setWorkerDragged} name={item.name} />;
                })}

            </div>
            {week.map((_, index) => (
                <div
                    onDrop={(e) => handleDrop(e, week[index])}
                    onDragEnd={() => {
                        console.log('drag end');
                    }}
                    onDragOver={handleDragOver}
                    key={index}
                    className="border border-black bg-sky-600"
                >

                    {/* {workerListByDay[index].workers.map((workerId) => (
                        <p key={workerId.id}>{workerId.name}</p>
                    ))} */}
                    {workerListByDayStore[index].workers.map((worker) => (
                        <p key={worker.id}>{worker.name}</p>
                    ))}
                </div>
            ))}
        </>
    )
}
