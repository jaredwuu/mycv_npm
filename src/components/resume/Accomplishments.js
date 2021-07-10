import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Accomplishments = () => {
    return (
        <div>
            <div>
            <div className='card'>
                <div className='card-content'>
                    <h6> <strong>PORFOLIOS</strong></h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web Developer</td>
                                <td>Sep 2018</td>
                                <td>
                                    <Link to='/' className='btn blue lighten-2'>
                                        view
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Web Developer</td>
                                <td>Sep 2018</td>
                                <td>
                                    <Link to='/' className='btn blue lighten-2'>
                                        view
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Web Developer</td>
                                <td>Sep 2018</td>
                                <td>
                                    <Link to='#' className='btn blue lighten-2'>
                                        view
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
        </div>
    )
}

export default Accomplishments
