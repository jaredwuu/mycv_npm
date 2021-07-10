import React from 'react'
import Brock from '../images/brocku-logo-rgb.png'


const Education = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6> <strong>EDUCATIONS</strong></h6>
                    <div className='row'>
                        <div className='col s12 m4 l4 xl4'>
                            <div className='year_exp text-center rounded-lg'>
                                <div className='flex justify-center bg-blue-500 px-2 py-2 rounded-lg'>
                                    <img src={Brock} className='w-1/4 rounded-lg opacity-70 hide-on-med-only' alt='Brock-Logo' />
                                    <div className='pl-2'>
                                        SEP 2018 - OCT 2020 
                                        <br />
                                        Brock University
                                        <br />
                                        M.Sc. Mathematics
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='s12 m8 l8 xl8'>
                            <div className='pl-3'>
                                <p>Full Scholarship, GPA: 4.0/4.0 </p>
                                <p>
                                    <strong>Research Direction:</strong> GAP (Groups, Algorithms, Programming) and Its Applications In Group Theory
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s12 m4 l4 xl4'>
                            <div className='year_exp text-center rounded-lg'>
                                <div className='flex justify-center bg-blue-500 px-2 py-2 rounded-lg'>
                                    <img src={Brock} className='w-1/4 rounded-lg opacity-70 hide-on-med-only' alt='Brock-Logo' />
                                    <div className='pl-2'>
                                        MAY 2015 - JUN 2018
                                        <br />
                                        Brock University
                                        <br />
                                        B.Sc. Computer Science
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='s12 m8 l8 xl8'>
                            <div className='pl-3'>
                                <p>Major Courses: GPA: 3.7/4.0 </p>
                                <p>
                                    Object Oriented Languages,Database Management System,Web Design,Computer Architecture, Project
                                    Management, Programming and Mathematics learning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6> <strong>EXPERIENCES</strong></h6>
                        <div className='row'>
                            <div className='col s12 m4 l4 xl4'>
                                <div className='text-center rounded-lg'>
                                    <div className='flex justify-center bg-blue-500 px-2 py-2 rounded-lg'>
                                        <img src={Brock} className='w-1/4 rounded-lg opacity-70 hide-on-med-only' alt='Brock-Logo' />
                                        <div className='pl-2'>
                                            SEP 2018 - APR 2021
                                            <br />
                                            Brock University
                                            <br />
                                            Teaching Assistant
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col s12 m8 l8 xl8'>
                                <blockquote className='no-pad pl-3'>
                                    <ul>
                                        <li>
                                            • Offered help desk support for students and solved their problems.
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
        </div>
    )
}
export default Education