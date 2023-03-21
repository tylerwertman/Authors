import React from 'react'
import {Link} from 'react-router-dom'

const Form = (props) => {
    const {author, setAuthor, errors, oneAuthor} = props
    const handleChange = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Link to="/">Go home</Link>
            <form action="" className='col-md-6 offset-3'>
                {author.name.length < 3 ? <p className="text-danger">{errors.name}</p> : ""}
                <div className="formgroup">
                    <label htmlFor="name">Author Name: </label>
                    <input type="text" className="form-control" name="name" value={oneAuthor.name} id="name" onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default Form