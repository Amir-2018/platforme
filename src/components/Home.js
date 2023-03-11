import { useState } from 'react';
import '../css/home.css'
import homeImg  from '../images/vec3.svg'
import ListCards from './ListCards';
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'exams1' ,body:'lorem ipsum...',author:'mario',id:1},
        {title:'exams2' ,body:'lorem ipsum...',author:'mario',id:2},
        {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:3},
        {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:4},
        {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:5},
        {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:6},
        {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:7},

        {title:'exams4' ,body:'lorem ipsum...',author:'mario',id:8},

    ])
    return ( 
        <div className="home" >
            <section id="home">
                <div className="container-fluid">
                    <img src={homeImg}></img>
                </div>
            </section>
            <ListCards blogs = {blogs}/>
        </div>
     );
}
 
export default Home;