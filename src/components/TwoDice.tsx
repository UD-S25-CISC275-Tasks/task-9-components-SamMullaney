import React, { useState } from "react";
import { Button } from "react-bootstrap";

function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}
/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the built-in `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

function getDifferentDieValue(currentValue: number): number {
    const newValue = d6();
    return newValue === currentValue
        ? getDifferentDieValue(currentValue)
        : newValue;
}

export function TwoDice(): React.JSX.Element {
    // Initialize dice with different values
    const initialDie1 = d6();
    const initialDie2 = ((initialDie1 + 1) % 6) + 1;

    const [die1, setDie1] = useState<number>(initialDie1);
    const [die2, setDie2] = useState<number>(initialDie2);

    function rollLeft(): void {
        setDie1(d6());
    }

    function rollRight(): void {
        setDie2(d6());
    }

    // Determine game result
    const message = die1 === die2 ? (die1 === 1 ? "Lose" : "Win") : "";

    return (
        <div>
            <span data-testid="left-die">{die1}</span>
            <span data-testid="right-die">{die2}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}
