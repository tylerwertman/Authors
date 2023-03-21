import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom'
// import Form from './Form'
import axios from 'axios'


const AuthorEdit = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [oneAuthor, setOneAuthor] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                // console.log(res.data.author)
                setOneAuthor(res.data.author)
            })
            .catch(err=>console.log(err))
    }, []);


    const handleValidation = () => {
        let isValid = true
        if(oneAuthor.name.length<3) {
            return false
        }
        return isValid
    }

    const editAuthor = (e) => {
        e.preventDefault();
        if(handleValidation()){
        axios.put(`http://localhost:8000/api/authors/${id}`, oneAuthor)
            .then(res=>navigate("/"))
            .catch(err=>console.log(err))
        }
        else {
            setErrors({
                name: "Author Name must be at least 3 characters"
            })
        }
    }

    const handleChange = (e) => {
        setOneAuthor({
            ...oneAuthor,
            [e.target.name]: e.target.value
        })
        console.log("test")
    }
    return (
        <div>
            <h5>Edit this author:</h5>
            <Link to="/">Go home</Link>
            <form action="" className='col-md-6 offset-3' onSubmit={editAuthor}>
                {oneAuthor && oneAuthor.name < 3 ? <p className="text-danger">{errors.name}</p> : ""}
                <div className="formgroup">
                    <label htmlFor="name">Author Name: </label>
                    <input type="text" className="form-control" name="name" id="name" value={oneAuthor.name} onChange={handleChange} />
                </div>
                <button className='btn btn-info mt-3'>Edit Author</button>
            </form>
                </div>
    )
}

export default AuthorEdit