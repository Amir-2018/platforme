// import portfolio_1 from '../assets/img/profile-img.jpg'
function fn(){
    document.querySelector("#header").classList.toggle("animm") ; 
  }
const Header = () => {
    return ( 
    

      
        <header id="heade">
        <i class="bi bi-list mobile-nav-toggle d-xl-none" onClick={fn}></i>


          <div class="d-flex flex-column">
      
            <div class="profil">
              <img src="" alt="" class="img-fluid rounded-circle"/>
              <h1 class="text-light"><a href='../../public/index.html'>Amir Maalaoui</a></h1>
              <div class="social-links mt-3 text-center">
                <a href="https://twitter.com/AmirMaalaou" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="https://www.facebook.com/amir.maalaoui.31" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="https://github.com/Amir-2018" class="google-plus"><i class="bx bxl-github"></i></a>
                <a href="https://www.linkedin.com/in/amir-maalaoui-12b67020a/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
      
            <nav id="navbar" class="nav-menu navbar">
              <ul>
                <li><a href='#hero' class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Skills</span></a></li>
                <li><a href="#sumarry" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Sumarry</span></a></li>
                <li><a href="#education" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Education</span></a></li>
                <li><a href="#internship" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Internships</span></a></li>
                <li><a href="#freelance" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Freelance</span></a></li>
                <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
              </ul>
            </nav>
          </div>
        </header>
     );
}
 
export default Header;