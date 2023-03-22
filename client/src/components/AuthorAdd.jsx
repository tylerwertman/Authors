import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
// import Form from './Form'


const AuthorAdd = (props) => {
    const navigate = useNavigate();
    // const {author, setAuthor} = props
    const [errors, setErrors] = useState([])
    const [author, setAuthor] = useState({
        name: ""
    })
    

    const addAuthor = (e) => {
        e.preventDefault()
            axios.post(`http://localhost:8000/api/authors`, author)
            .then(res=>{
                console.log(res)
                setAuthor({
                    name: ""
                })
                navigate("/")

            })
            .catch(err=>{
                console.log(err.response.data)
                setErrors(err.response.data.error.errors);
            })
    }
    const handleChange = (e) => {
            setAuthor({
                ...author,
                [e.target.name]: e.target.value
            })
    }
    
    return (
        <div>
            <h5>Add a new author:</h5>
            <Link to="/">Go home</Link>
            <form action="" className='col-md-6 offset-3' onSubmit={addAuthor}>
                {author.name && author.name.length < 3 ? <p className="text-danger">FE: Name is not long enough</p> : ""}
                { errors.name ? <p className="text-danger">{errors.name.message}</p>: null}
                <div className="formgroup">
                    <label htmlFor="name">Author Name: </label>
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} />
                </div>
                <button className='btn btn-info mt-3'>Add Author</button>
            </form>
        </div>
    )
}

export default AuthorAdd