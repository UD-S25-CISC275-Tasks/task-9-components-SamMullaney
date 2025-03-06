import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startAttempt(): void {
        setInProgress(true);
        setAttempt(attempt - 1);
    }

    function endAttempt(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    //when inProgress is true, the startAttempt and mulligan buttons are disabled

    return (
        <div>
            <span>Attempts: {attempt}</span>
            <Button
                onClick={startAttempt}
                disabled={inProgress || attempt === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={endAttempt} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
