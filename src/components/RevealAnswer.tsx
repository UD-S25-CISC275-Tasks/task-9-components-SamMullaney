import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(true);

    function flipVisibility(): void {
        setShowAnswer(!showAnswer);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {!showAnswer ? <span>42</span> : null}
        </div>
    );
}
