import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarDate() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className="w-full bg-white">
            <DatePicker
                className="bg-white w-full  text-black rounded-md border-none"
                showIcon
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
            />
        </div>
    );
}
