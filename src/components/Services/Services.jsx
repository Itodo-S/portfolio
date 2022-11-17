import React from 'react'
import { BsGlobe } from 'react-icons/bs';
import { FaAppStore } from 'react-icons/fa'
const Services = () => {
    return (
        <div id='services'>
            <div className="container">
                <h1 className='sub-title'>My Services</h1>

                <div className="services-list">
                    <div>
                        <BsGlobe className='i-con' />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus illum assumenda repudiandae quam itaque cumque dicta esse, sequi excepturi dolorum, iure, dolor laboriosam. Quae obcaecati ullam doloremque enim eum?</p>
                        {/* <a href="#">Learn more</a> */}
                    </div>

                    <div>
                        <FaAppStore className='i-con' />
                        <h2>Mobile app Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus illum assumenda repudiandae quam itaque cumque dicta esse, sequi excepturi dolorum, iure, dolor laboriosam. Quae obcaecati ullam doloremque enim eum?</p>
                        {/* <a href="#">Learn more</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services