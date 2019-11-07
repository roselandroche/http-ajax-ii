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

	return (
		<>
			<h1>Users</h1>

            {users.map(user => (
                <div key={user.id} className='account'>
                    <Link to={`/users/${user.id}`} className='account-update'>Edit</Link>
                    <div className="account-row">Name: {user.name}</div>
			        <div className="account-row">Email: {user.email}</div>
                </div>
            ))}
			
		</>
	)
}

export default Users