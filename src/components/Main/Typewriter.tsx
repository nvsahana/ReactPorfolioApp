import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number; // typing speed ms
  pause?: number; // pause between words ms
}

const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 60, pause = 1400 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    const timeout = setTimeout(() => {
      if (!reverse) {
        if (subIndex < words[index].length) {
          setSubIndex((s) => s + 1);
        } else {
          setReverse(true);
          setTimeout(() => {}, 0);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
        } else {
          setReverse(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, reverse ? Math.max(20, speed / 2) : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed]);

  useEffect(() => {
    // Pause at the end of word
    if (subIndex === words[index].length) {
      const t = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(t);
    }
  }, [subIndex, index, words, pause]);

  return <span aria-hidden="true">{words[index].slice(0, subIndex)}<span className="cursor">│</span></span>;
};

export default Typewriter;
