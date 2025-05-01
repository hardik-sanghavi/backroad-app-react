import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';

const PageLinks = () => {
   
    pageLinks.map(element => {
     return (
     <li key={element.id}>
         <a href={element.href} className="nav-link"> {element.title}</a>
         </li>
     );
 })
 }

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">            
            {
        
            pageLinks.map(element => {
                return (
                <li key={element.id}>
                    <a href={element.href} className="nav-link"> {element.title}</a>
                    </li>
                );
            })
            }
                    <PageLinks/>
           
          </ul>
        
          <ul className="nav-icons">
            {
                socialLinks.map((link)=>{
                    return (
                        <li key={link.id}>
                        <a href={link.href} target="_blank" className="nav-icon">
                            <i className={link.icon}></i>
                        </a>
                        </li>
                    );
                })
            }           
          </ul>
        </div>
        </nav>
    )
}



export default Navbar;