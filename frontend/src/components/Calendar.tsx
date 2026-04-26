import { Availability } from "@/app/types";

export default function Calendar({
    availability,
}: {
    availability: Availability[];
}) {
    return (
        <div className="grid grid-cols-5 gap-2 mt-4">
            {availability.map((day) => (
                <div
                    key={day.date}
                    className={`p-2 text-center rounded ${
                        day.available ? "bg-green-200" : "bg-red-200"
                    }`}
                >
                    {day.date}
                </div>
            ))}
        </div>
    );
}
