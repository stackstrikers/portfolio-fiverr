import React, { useEffect, useRef } from 'react';
import classes from '../styles/Cursor.module.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorRef.current.style.display = 'block';
    });
    document.addEventListener('mouseleave', (e) => {
      cursorRef.current.style.display = 'none';
    });
  }, []);
  return <div ref={cursorRef} className={classes.cursor}></div>;
};

export default Cursor;
