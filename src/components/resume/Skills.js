import React from 'react'

const Skill = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6> <strong>PROFESSIONAL SKILLS</strong></h6>
                    <div className='row'>
                        <div className='col s6'>
                            <p>Java</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue darken-2' style={{ width: '89%' }}> </div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>Reactjs</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue darken-2' style={{ width: '80%' }}> </div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>Javascript</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue darken-2' style={{ width: '80%' }}> </div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>HTML</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue darken-2' style={{ width: '80%' }}> </div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>CSS</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue darken-2' style={{ width: '89%' }}> </div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>Nodejs</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue darken-2' style={{ width: '80%' }}> </div>
                            </div>
                        </div>
                        {/* <div className='col s12'>
                            <p>Updating</p>
                            <div className="progress">
                                <div className="indeterminate blue darken-2"></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skill
