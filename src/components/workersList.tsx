'use client';
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Worker from './worker';
import { week } from '@/consts/template';

type WorkersListProps = {
    day: string;
    workers?: string[];
}

export default function WorkersList() {
    const [workerDragged, setWorkerDragged] = useState('');
    const [workerListByDay, setWorkerListByDay] = useState<WorkersListProps[]>([]);
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('drag over');
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
        e.preventDefault();
        setWorkerListByDay({ ...workerListByDay, [day]: [...(workerListByDay.find(item => item.day === day)?.workers || []), workerDragged] });
        console.log('drop end', day, workerDragged);
    }
    return (
        <>
            <div className="border border-black bg-sky-600 text-center justify-center">
                <h2 className="text-center">workers</h2>
                {Array.from({ length: 4 }).map(() => {
                    const id = nanoid();
                    return <Worker key={id} id={id} callBack={setWorkerDragged} />;
                })}

            </div>
            {week.map((_, index) => (
                <div
                    onDrop={() => {
                        console.log('drop end +');
                    }}
                    onDragEnd={() => {
                        console.log('drag end');
                    }}
                    onDragOver={handleDragOver}
                    key={index}
                    className="border border-black bg-sky-600"
                >
                    {workerListByDay.find(item => item.day === week[index])?.workers?.map((workerId) => (
                        <p key={workerId}>{workerId}</p>
                    ))}
                </div>
            ))}
        </>
    )
}
