'use client';

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function InlineVisible() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
        setIsOpen(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative inline-block cursor-pointer">
            <button
                className="border px-3 py-2 rounded bg-white text-black"
                onClick={handleClick}
            >
                {selectedDate ? format(selectedDate, "dd-MM-yyyy") : "Выбрать дату"}
            </button>

            {isOpen && (
                <div className="absolute z-50 mt-2">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleChange}
                        inline
                    />
                </div>
            )}
        </div>
    );
}
