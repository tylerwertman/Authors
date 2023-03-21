import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
// import Form from './Form'


const AuthorAdd = (props) => {
    const navigate = useNavigate();
    const {author, setAuthor} = props
    const [errors, setErrors] = useState({})

    const handleValidation = () => {
        let isValid = true
        if(author.name.length<3) {
            return false
        }
        return isValid
    }
    const addAuthor = (e) => {
        e.preventDefault()
        if(handleValidation()){
            axios.post(`http://localhost:8000/api/authors`, author)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            navigate("/")
        }
        else {
            setErrors({
                name: "Author Name must be at least 3 characters"
            })
        }
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
                {author.name.length < 3 ? <p className="text-danger">{errors.name}</p> : ""}
                <div className="formgroup">
                    <label htmlFor="name">Author Name: </label>
                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} />
                </div>
            </form>
                <button className='btn btn-info mt-3'>Add Author</button>
        </div>
    )
}

export default AuthorAdd