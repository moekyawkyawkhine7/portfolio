import React from 'react'
// scss
import './About.scss';
// lib
import { motion } from 'framer-motion';
// constants
import { images } from '../../constants';
// HOC
import { AppWrap } from '../../wrapper';

const abouts = [
  {
    title: "Wed Development",
    imgUrl: images.about01,
    description: "I am a good developer."
  },
  {
    title: "Frontend Development",
    imgUrl: images.about02,
    description: "I am a good developer."
  },
  {
    title: "Backend Development",
    imgUrl: images.about03,
    description: "I am a good developer."
  },
  {
    title: "MERN Stack",
    imgUrl: images.about04,
    description: "I am a good developer."
  }
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, "about")