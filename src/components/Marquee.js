import React from 'react';
import classes from '../styles/Marquee.module.css';

const Marquee = ({ firstText, secondText }) => {
  return (
    <div className={classes.marquee__container}>
      <div className={classes.marquee}>
        <div aria-hidden="true" className={classes.marquee__inner}>
          <span>
            &mdash;&nbsp;{firstText}&nbsp;&nbsp;<span>{secondText}</span>&nbsp;
          </span>
          <span>
            &mdash;&nbsp;{firstText}&nbsp;&nbsp;<span>{secondText}</span>&nbsp;
          </span>
          <span>
            &mdash;&nbsp;{firstText}&nbsp;&nbsp;<span>{secondText}</span>&nbsp;
          </span>
          <span>
            &mdash;&nbsp;{firstText}&nbsp;&nbsp;<span>{secondText}</span>&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
