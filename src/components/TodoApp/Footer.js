import  {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='center'>
             <p>Copyright &copy; 2021</p>
            <Link to='/aboutToDo'>About</Link>
        </footer>
    )
}

export default Footer
