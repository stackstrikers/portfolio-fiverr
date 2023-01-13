import React from 'react'
import classes from '../styles/About.module.css'

const About = () => {
    return (
      <section>
        <div className="container">
          <div className={classes.about__text__wrapper}>
            <p>
              HI, I am <strong>Rabbi Ginnat</strong>, a WordPress Developer
              based in Bangladesh. I develop clean, minimalist websites with
              wordPress. I create delightful and intuitive human-centered
              experiences at scale through my product
            </p>
          </div>
        </div>
      </section>
    );
}

export default About
