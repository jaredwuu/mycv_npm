import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

const Header = ({title,onAdd, showAdd}) => {
    const location = useLocation()
    
    return (
        <header>
            <h1 className="text-center">{title}  {location.pathname==='/todolist'&& 
               
           <button className={`${showAdd?'red':'green'} rounded px-10 hoverable`} onClick={onAdd}>{showAdd?'Close':'Add'}</button>
             
            
            }</h1> 
           
        </header>   
  
    )
}

Header.defaultProps={
    title:'Task Tacker',
}

Header.prototype={
    title:PropTypes.String,
}



export default Header
