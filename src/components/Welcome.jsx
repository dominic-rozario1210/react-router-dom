import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {

    const { username } = useParams();
    return (
        <h1>Welcome {username}</h1>
    )
}

export default Welcome
