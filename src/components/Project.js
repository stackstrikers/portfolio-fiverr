import React from 'react';
import classes from '../styles/Project.module.css';

const Project = ({ project, id }) => {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={classes.project__container}
    >
      <div className={classes.project__number}>
        {`0${id}`.slice(-2)}
      </div>
      <div className={classes.project__title}>
        <div>
          <span className={classes.project__title__text}>{project.title}</span>
        </div>
        <div>
          <span className={classes.project__title__text}>{project.title}</span>
        </div>
      </div>
      <div className={classes.project__subtitle}>{project.subtitle}</div>
    </a>
  );
};

export default Project;
