import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    var d = new Date();
    var year = d.getFullYear();
    return (
        <div>
            <footer className="page-footer light-blue darken-4 sticky bottom-0 w-full">
                <div className="container">
                    <div className="row">
                        <div className="col l4 s12">
                            <div className="">
                                <Link to='/'>
                                    <h5 className='text-white hover:text-blue-500 brand-logo'>MyCV</h5>
                                </Link>
                                <span className='card-title items-center text-xl'>
                                    Follow me
                                </span>
                                <p className='flex justify-start py-2'>
                                    <a href='https://github.com/jaredwuu' target='_blank' rel="noreferrer">
                                        <i className='fa fa-github fa-2x px-2 py-2 rounded text-white hover:bg-black'></i>
                                    </a>
                                    <a href='https://www.linkedin.com/in/jared-wu-979a53158/' target='_blank' rel="noreferrer">

                                        <i className="fa fa-linkedin-square fa-2x px-2 py-2 rounded text-white hover:bg-black"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='col l4 s12 '>

                        </div>
                        <div className="col l4 s12">
                            <div className=''>
                                <h5 className="text-gray-300 cursor-default">React Projects</h5>
                                <ul>
                                    <li>
                                        <Link to='/memories'>
                                            <p className='text-white hover:text-blue-500 brand-logo'>MemoriesApp</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/html_editor'>
                                            <p className='text-white hover:text-blue-500 brand-logo'>Html Editor</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/todolist'>
                                            <p className='text-white hover:text-blue-500 brand-logo'>TodoApp</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/expense_tracker'>
                                            <p className='text-white hover:text-blue-500 brand-logo'>Expense Tracker</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/color_picker'>
                                            <p className='text-white hover:text-blue-500 brand-logo'>Color picker</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/draft_board'>
                                            <p className='text-white hover:text-blue-500 brand-logo'>Draft Board</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {year} Copyright @ <a className='text-red-300 hover:text-red-500' href="mailto:jaredwuu@hotmail.com">Jared Wu</a>
                        <a className="grey-text text-lighten-4 right" href="#!">More info</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
