import React, { useState, useEffect } from "react"
import api from "../utils/api"
import { Link } from 'react-router-dom'

function Users(props) {
	const [users, setUsers] = useState([])

	useEffect(() => {
		api().get("/users")
			.then(result => {
				setUsers(result.data)
			})
			.catch(error => {
				console.log(error)
			})
    }, [])
    
    const handleDelete = (event, id) => {
        event.preventDefault()
        // optimistic update
        setUsers(users.filter(user => user.id !== id))

        api()
            .delete(`/users/${id}`)
            .then(res => {
                console.log(`User was deleted`) 
            })
            .catch(err => {
                console.log(err)
            })
    }

	return (
		<>
			<h1>Users</h1>

            {users.map(user => (
                <div key={user.id} className='account'>
                    <Link to={`/users/${user.id}`} className='account-update'>Edit</Link>
                    <div className='account-delete' onClick={(event) => handleDelete(event, user.id)}>Delete</div>

                    <div className="account-row">Name: {user.name}</div>
			        <div className="account-row">Email: {user.email}</div>
                </div>
            ))}
			
		</>
	)
}

export default Users