import { useMemo } from 'react'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

export default function DateDaysWeek() {
    const dataDaysWeek = useMemo(() => {
        return (
            <div>
                <p>1</p>
            </div>
        )
    }, []);
    return dataDaysWeek
}
