import dayjs from 'dayjs'
import React from 'react'

export default function CurrentData() {
    const currentData = dayjs().format(('DD/MM/YYYY'))
    return (
        <div className="flex flex-col items-center justify-center rounded-xl bg-sky-600 w-60 text-center m-1">
            <h2>Current data</h2>
            <h2 >
                {currentData}
            </h2>
        </div>

    )
}
