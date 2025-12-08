'use client';
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function Calendar() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border rounded px-3 py-2"
            dateFormat="dd.MM.yyyy"
        />
    );
}
