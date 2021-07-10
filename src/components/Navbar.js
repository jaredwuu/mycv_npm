
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {


    return (
        <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='hover:text-blue-500 brand-logo'>
                            MyCV
                        </Link>
                        <Link to='#' data-target='side-nav' className='sidenav-trigger'>
                            <i className="material-icons hover:text-blue-500">menu</i>
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to='/' className='navbar'>
                                    <i className='fas fa-home'></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/skills' className='navbar'>
                                    <i className='fas fa-copy'></i>Skills
                                </Link>
                            </li>

                            <li>
                                <Link to='/educations' className='navbar'>
                                    <i className='fas fa-graduation-cap'></i>Educations
                                </Link>
                            </li>
                            <li>
                                <Link to='/porfolios' className='navbar'>
                                    <i className='fas fa-address-card'></i>Porfolios
                                </Link>
                            </li>
                            <li >
                                <Link to='/contactme'>
                                    <i className='fas fa-envelope'></i>Contact
                                </Link>
                            </li>
                            <li>
                                {/* <a className='navbar dropdown-trigger' data-target='dropdown'>
                                    <i className='fas fa-file-signature'></i><span className='pl-1'>Projects</span><i className="material-icons center right pt-1">arrow_drop_down</i>
                                </a> */}
                                <button className='dropdown-trigger transparent navbar' data-target='dropdown'>
                                    <i className='fas fa-file-signature'></i><strong>Projects</strong><i className="material-icons center right">arrow_drop_down</i>
                                </button>

                            </li>
                            <div id='dropdown' className='dropdown-content blue-text'>
                                <ul>
                                    <li>
                                        <Link to='/draft_board'>
                                            <span className='text-black hover:text-blue-700'>Draft Board</span>                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/memories">
                                            <span className='text-black hover:text-blue-700'>MemoriesApp</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/html_editor">
                                            <span className='text-black hover:text-blue-700'>HtmlEditor</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/todolist">
                                            <span className='text-black hover:text-blue-700'>TodoApp</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/expense_tracker">
                                            <span className='text-black hover:text-blue-700'>Expense Tracker</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/color_picker">
                                            <span className='text-black hover:text-blue-700'>Color Picker</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='side-nav'>
                <li className='mobinav sidenav-close'>
                    <Link to='/' >
                        <i className='fas fa-home sidenav-close'></i>Home
                    </Link>
                </li>
                <li className='mobinav sidenav-close'>
                    <Link to='/skills'>
                        <i className='fas fa-copy'></i>Skills
                    </Link>
                </li>

                <li className='mobinav sidenav-close'>
                    <Link to='/educations'>
                        <i className='fas fa-graduation-cap'></i>Educations
                    </Link>
                </li>
                <li className='mobinav sidenav-close'>
                    <Link to='/porfolios'>
                        <i className='fas fa-address-card'></i>Portfolios
                    </Link>
                </li>
                <li className='mobinav sidenav-close'>
                    <Link to='/contactme'>
                        <i className='fas fa-envelope'></i>Contact
                    </Link>
                </li>
                <li className='mobinav sidenav-close'>
                    <button className='dropdown-trigger transparent w-full pr-24' data-target='dropdown1'>
                        <i className='fas fa-file-signature'></i><strong className='pl-12'>Projects</strong><i className="material-icons center right">arrow_drop_down</i>
                    </button>
                </li>
                <div id='dropdown1' className='dropdown-content flex justify-between'>
                    <ul>
                        <li>
                            <Link to='/draft_board'>
                                <span className='text-black hover:text-blue-700'>Draft Board</span>                                        </Link>
                        </li>
                        <li>
                            <Link to="/memories">
                                <span className='text-black hover:text-blue-700'>MemoriesApp</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/html_editor">
                                <span className='text-black hover:text-blue-700'>HtmlEditor</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/todolist">
                                <span className='text-black hover:text-blue-700'>TodoApp</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/expense_tracker">
                                <span className='text-black hover:text-blue-700'>Expense Tracker</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/color_picker">
                                <span className='text-black hover:text-blue-700'>Color Picker</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </ul>
        </>
    )
}

export default Navbar
