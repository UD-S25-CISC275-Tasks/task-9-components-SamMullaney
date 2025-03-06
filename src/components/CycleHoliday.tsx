import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    // Define the holidays with their respective emojis
    type Holiday = "🎄" | "🦃" | "🎃" | "🎆" | "💖";

    const holidaysAlphabetical: Holiday[] = ["🎆", "🎃", "🎄", "💖", "🦃"];
    const holidaysByYear: Holiday[] = ["💖", "🎆", "🎃", "🦃", "🎄"];

    const [holiday, setHoliday] = useState<Holiday>("🎄"); // Start with Christmas 🎄

    function nextAlphabetically(): void {
        const index = holidaysAlphabetical.indexOf(holiday);
        setHoliday(
            holidaysAlphabetical[(index + 1) % holidaysAlphabetical.length]
        );
    }

    function nextByYear(): void {
        const index = holidaysByYear.indexOf(holiday);
        setHoliday(holidaysByYear[(index + 1) % holidaysByYear.length]);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextByYear}>Advance by Year</Button>
        </div>
    );
}
