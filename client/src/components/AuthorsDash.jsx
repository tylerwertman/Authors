import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams} from 'react-router-dom'

const AuthorsDash = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()

    const {authors, setAuthors} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(res=>{
            console.log(res.data)
            setAuthors(res.data.author)
        })
        .catch(err=>console.log(err))
    
    }, []);

    const removeAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            const filteredAuthors = authors.filter(author => author._id !== id)
            setAuthors(filteredAuthors)
        })
        .catch(err=>console.log(err))
    }

    const editAuthor =(id)=> {
        navigate(`/edit/${id}`)
    }

    return (
        <div>
            <h5>We have quotes by:</h5>
            <Link to="create">Add an author</Link>
            <table className="col-md-6 mx-auto mt-3">
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author)=>{
                        return (
                            <tr key={author._id}>
                                {/* <td><Link to={`${author._id}`}>{author.name}</Link></td> */}
                                <td>{author.name}</td>
                                <td>
                                    <button className="btn btn-info" onClick={()=>editAuthor(author._id)}>Edit Author</button>&nbsp;
                                    <button className="btn btn-danger" onClick={()=>removeAuthor(author._id)}>Remove Author</button>
                                </td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorsDash