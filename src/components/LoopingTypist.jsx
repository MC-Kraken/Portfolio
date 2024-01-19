import Typist from "react-typist-component";
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

export default function LoopingTypist({ startTyping }) {
  const words = useMemo(
    () => [" software engineer", "n urbanist", " weight lifter"],
    [],
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [isReadyForBackspace, setIsReadyForBackspace] = useState(false);
  const backspaceDelay = 100;
  const typingDelay = 50;

  useEffect(() => {
    if (!startTyping) {
      return;
    }

    const wordTimer = setTimeout(
      () => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      },
      words[currentWordIndex].length * backspaceDelay + 5000,
    );

    return () => {
      clearTimeout(wordTimer);
    };
  }, [startTyping, currentWordIndex, words]);

  return (
    <Typist
      typingDelay={typingDelay}
      backspaceDelay={backspaceDelay}
      restartKey={currentWordIndex}
    >
      <span className="h3">{words[currentWordIndex]}</span>
      <Typist.Delay ms={4000} />
      <Typist.Backspace count={words[currentWordIndex].length} />
    </Typist>
  );
}

LoopingTypist.propTypes = {
  startTyping: PropTypes.bool,
};
