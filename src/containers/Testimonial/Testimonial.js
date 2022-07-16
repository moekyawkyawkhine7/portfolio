import React, { useState } from 'react'
// scss
import './Testimonial.scss';
// lib
import { HiChevronLeft } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
// mocking
import { testimonialData as testimonials } from './mocking_testimonial';
import { brandData as brands } from './mocking_brand';
// HOC
import { AppWrap, MotionWrap } from '../../wrapper';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={testimonials[currentIndex].url} alt={testimonials[currentIndex].name} />
                        <div className="app__testimonial-content">
                            <p className="p-text">{testimonials[currentIndex].feedback}</p>
                            <div>
                                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand.id}
                    >
                        <img src={brand.url} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonial")