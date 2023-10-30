import Typist from 'react-typist-component';
import PropTypes from "prop-types";

export default function TypewriterEffect({firstLineTyped}) {
    return (

        <div className={"row m-0 text-center"}>
            <div className="col">
                <Typist typingDelay={50} className="typewriter-text">
                    <span className="h1">Hi, I&apos;m Blake McCracken</span>
                </Typist>
                <br />
                {firstLineTyped && (
                    <Typist typingDelay={50} finishDelay={1000} className="typewriter-text">
                        <span className="h3">I&apos;m a software engineer in Seattle, WA</span>
                    </Typist>
                )}
            </div>
        </div>
    )
}

TypewriterEffect.propTypes = {
    firstLineTyped: PropTypes.bool,
};