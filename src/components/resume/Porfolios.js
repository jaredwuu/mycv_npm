import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import GAP from '../documents/GAP.pdf'

const Porfolios = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6> <strong>PORFOLIOS</strong></h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Responsibility</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>M.Sc Project</td>
                                <td>
                                    • Solved combinatorial problems in group theory with GAP programming language.
                                    <br />
                                    • Cooperated with supervisors and provided technical and programming support.
                                    <br />
                                    • Developed programs and provided sufficient and efficient data to investigate Group theory problems.
                                </td>
                                <td>
                                    <Link to={GAP} className='btn blue darken-2 hoverable' target="_blank">
                                        view
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Personal Website</td>
                                <td>
                                    • Developed a Node.js and react based website with MongoDB backend
                                    <br/>
                                    • Skills: HTML5, CSS, JavaScript, MERN Stack, PM2,Let’s Encrypt
                                    <br />
                                    • Development code managed via Git and maintained in Linux Environment
                                </td>
                                <td>
                                    <a href='https://jiachaowu.site' className='btn blue darken-2 hoverable' target='_blank' rel="noreferrer">
                                        view
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>RoboRace</td>
                                <td>
                                    • Implemented a 2D board game by using Java and design patterns
                                    <br/>
                                    • Skills: Java, GUI(AWT,Swing), Jave APIs, parallelism, animation, network programming and client-server
                                    <br />
                                    • 
                                </td>
                                <td>
                                    
                                    <a href='/porfolios'><button className='btn waves-effect waves-light blue darken-2 hoverable'> 
                                        view
                                    </button></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default Porfolios
