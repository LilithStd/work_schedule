'use client';
import { nanoid } from 'nanoid';
import React from 'react'
import Worker from './worker';

export default function WorkersList() {
    return (
        <>
            <div className="border border-black bg-sky-600 text-center justify-center">
                <h2 className="text-center">workers</h2>
                {Array.from({ length: 4 }).map(() => {
                    const id = nanoid();
                    return <Worker key={id} id={id} />;
                })}

            </div>
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    onDrop={() => {
                        console.log('drop end')
                    }}
                    onDragOver={() => console.log('drag over')}
                    key={index}
                    className="border border-black bg-sky-600"
                >

                </div>
            ))}
        </>
    )
}
