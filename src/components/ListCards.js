import '../css/card.css'
import  CardImg  from '../images/calculator.png';
const ListCards = (props) => {
    const blogs = props.blogs ; 
    return ( 
        <div className="container  ">
            <div className='row d-flex justify-content-center align-items-center '>
                {blogs.map((blog)=>(
                <div class="col col-3 border">
                        <img class="card-img-top" src='' alt="Card image cap"/>
                        <div class="card-body">
                        <p class="card-text">{blog.body}</p>
                        </div>
                </div>
                ))}
            </div>
        
        </div>
     );
}
 
export default ListCards;