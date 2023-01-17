import './index.scss'
import LogoS from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/jdii.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHouseUser,
  faUserSecret,
  faToolbox,
 
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Joe" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHouseUser} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUserSecret} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faToolbox} color="#4d4d4e" />
          </NavLink>

          
        </nav>
        <ul>
          <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/joseph-debblay-ii-90384423b/'>
                <LinkedInIcon style={{color:"#4d4d4e"}} sx={{fontSize: 20, "& :hover": { color: "#FFB100" }}}/>

                </a> 
          </li>
          <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/JMD2020'>
                <GitHubIcon style={{color:"#4d4d4e"  }} sx={{fontSize: 20,"& :hover": { color: "#FFB100" }}}/>
                </a>
            
          </li>
          <li>
            
              
            
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
