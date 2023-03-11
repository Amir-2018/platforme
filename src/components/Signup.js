import '../css/Signup.css'
const Signup = () => {
    return ( 
        <div className="Auth-form-container bg-dark">

<form className="Auth-form">

  <div className="Auth-form-content">
    
    <div className='title_T'>
    <h2>Signup</h2>
    </div>
    <div className='table'>


        <table>
            <tbody>
                <tr>
                    <td>
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your name"
                        />
                    </div>
                    </td>

                    <td>
                    <div className="form-group mt-3">
                        <label>Lastname</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your lastname"
                        />
                    </div>
                    </td>
                </tr>


                <tr>
                    <td>
                    <div className="form-group mt-3">
                        <label>Phone</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your phone"
                        />
                    </div>
                    </td>

                    <td>
                    <div className="form-group mt-3">
                        <label>Email    </label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your email"
                        />
                    </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    <div className="form-group mt-3">
                        <label>Speciality</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your Speciality"
                        />
                    </div>
                    </td>

                    <td>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    <div className="form-group mt-3">
                        <label>Image</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Upload you image"
                        />
                    </div>
                    </td>

                    <td>

                    </td>
                </tr>
                <tr>
                    <td className='btn_sign' colSpan={2}>  <a href='#' className='btn btn-warning'>Sign Up</a>  </td>
                </tr>
            </tbody>
        </table>

  </div>
    </div>
 
        
   
</form>
</div>
     );
}
 
export default Signup;
