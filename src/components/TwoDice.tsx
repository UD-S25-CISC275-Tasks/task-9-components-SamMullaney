import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the built-in `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Initialize dice with different values
    let initialDie1 = d6();
    let initialDie2 = d6();
    while (initialDie1 === initialDie2) {
        initialDie2 = d6(); // Ensure different initial values
    }

    const [die1, setDie1] = useState<number>(initialDie1);
    const [die2, setDie2] = useState<number>(initialDie2);

    function rollLeft(): void {
        setDie1(d6());
    }

    function rollRight(): void {
        setDie2(d6());
    }

    // Determine game result
    let message = "";
    if (die1 === die2) {
        message = die1 === 1 ? "Lose" : "Win";
    }

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
