import React from 'react'
import Brock from './images/brocku-logo-rgb.png'

const Experiences = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6> <strong>EXPERIENCES</strong></h6>
                    <div className='row'>
                        <div className='col s12 m4 l4 xl4'>
                            <p className='teal year_exp white-text text-center px-2 rounded-t-lg'>
                                SEP <strong>2018</strong> - Apr
                                <strong> 2021 </strong>
                                Brock University
                            </p>
                            <img src={Brock} className='w-full rounded-b-lg' alt='Brock-Logo' />
                        </div>
                        <div className='col s12 m8 l8 xl8'>
                            <blockquote className='no-pad'>
                                <h6 className='np-pad mt-bottom'>
                                    <strong>Teaching Assistant</strong>
                                </h6>
                                <ul>
                                    <li>
                                        •Offered help desk support for students and solved their problems.
                                    </li>
                                    <li>
                                        • Assisted instructor in lab and had meeting regularly
                                    </li>
                                    <li>
                                        • Combined programming and Mathematics learning with VB.NET
                                    </li>
                                </ul>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences
