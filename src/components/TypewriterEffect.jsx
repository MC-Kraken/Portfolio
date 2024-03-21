import Typist from "react-typist-component";
import PropTypes from "prop-types";
import LoopingTypist from "./LoopingTypist.jsx";

export default function TypewriterEffect({ firstLineTyped }) {
  return (
    <div className={"row m-0 text-center"}>
      <div className="col">
        <Typist typingDelay={50} >
          <span className="h1">Hi, I&apos;m Blake McCracken</span>
        </Typist>
        <br />
          {firstLineTyped && <h3 className="d-inline">I&apos;m a</h3>}
        {firstLineTyped && <LoopingTypist startTyping={firstLineTyped} />}
      </div>
    </div>
  );
}

TypewriterEffect.propTypes = {
  firstLineTyped: PropTypes.bool,
};
