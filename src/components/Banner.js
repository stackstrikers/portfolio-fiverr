import React from 'react';
import classes from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes.banner__intro}>
        <p className={classes.banner__title}>
          WORDPRESS
          <br />
          WIZZARD
        </p>
        <p className={classes.banner__subtitle}>ELEMENTOR EXPERT</p>
      </div>
    </section>
  );
};

export default Banner;
