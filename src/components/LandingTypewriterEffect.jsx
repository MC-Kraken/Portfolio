import Typist from 'react-typist-component';
import { useEffect, useState } from "react";

function TypewriterEffect() {
    const [firstLineTyped, setFirstLineTyped] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstLineTyped(true);
        }, 2000)
    });

    return (
        <div className="row m-0 text-center">
            <div className="col">
                <Typist className="typewriter-text">
                    <span className="h1">Hi, I&apos;m Blake McCracken</span>
                </Typist>
                <br />
                {firstLineTyped && (
                    <Typist className="typewriter-text">
                        <span className="h3">I&apos;m a software engineer in Seattle, WA</span>
                    </Typist>
                )}
            </div>
        </div>
    );
}

export default TypewriterEffect;
