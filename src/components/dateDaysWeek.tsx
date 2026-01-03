import { useMemo } from 'react'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

export default function DateDaysWeek() {
    const newArrayForWeekDays = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]
    const dataDaysWeek = useMemo(() => {
        return (
            <div className={`flex`}>
                {newArrayForWeekDays.map((dayIndex) => {
                    return <p key={dayIndex}>{dayIndex}</p>
                })}
            </div>
        )
    }, []);
    return dataDaysWeek
}
