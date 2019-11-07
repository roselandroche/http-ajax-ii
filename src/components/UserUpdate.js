import React, { useState, useEffect } from 'react'
import api from '../utils/api'

function UserUpdate(props) {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: ''
    })

    useEffect(() => {
        api() 
            .get(`/users/${props.match.params.id}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [props.match.params.id])

    return (
        <div>
            <h1>Update User</h1>
        </div>
    )
}

export default UserUpdate
