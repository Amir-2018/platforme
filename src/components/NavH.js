
import '../outils/css/styles.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
//import img1 from './img1.png';
import { useState, useEffect } from 'react';

function Navigation() {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {

    if((window.location.href.substring(window.location.href.lastIndexOf('/') + 1))=='home#service')
        window.location.href = '#service';
    else if((window.location.href.substring(window.location.href.lastIndexOf('/') + 1))=='home#about')
        window.location.href = '#about';
    else if((window.location.href.substring(window.location.href.lastIndexOf('/') + 1))=='home#contact')
        window.location.href = '#contact';
 
   
   
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setNavbarClass('bg-dark');
    } else {
      setNavbarClass('');
    }
  };

  


  return (
    <Navbar expand="lg" fixed="top" variant="dark" id="mainNav" className={navbarClass}>
      <Container>
        <Navbar.Brand href="/home">
            <h2>Bac Fe Jib</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto py-4 py-lg-0">
            <Nav.Link href='/home#service'><span className='text-warning'> Services</span></Nav.Link>    
            <Nav.Link href="/home#about"><span className='text-warning'>About</span></Nav.Link>
            <Nav.Link href="/home#contact"><span className='text-warning'>Contact</span></Nav.Link>
            <Nav.Link href="/home#portfolio"><span className='text-warning'>Portfolio</span></Nav.Link>
            <Nav.Link href="/login"><span className='text-warning'>Login</span></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
