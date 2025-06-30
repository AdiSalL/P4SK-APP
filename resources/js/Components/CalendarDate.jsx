import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarDate({ value, onChange }) {
    const [selectedDate, setSelectedDate] = useState(
        value ? new Date(value) : new Date()
    );

    useEffect(() => {
        setSelectedDate(value ? new Date(value) : new Date());
    }, [value]);

    return (
        <div className="w-full bg-white">
            <DatePicker
                className="bg-white w-full text-black rounded-md border-none"
                showIcon
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                    onChange && onChange(date);
                }}
                dateFormat="yyyy-MM-dd"
            />
        </div>
    );
}
