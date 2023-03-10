import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        const { users } = this.state
        const userList = users.map(user => {
            return ( 
            <div key={user.id}>
            <div className="content">
                <div>Name : {user.name}</div>
                <div>userName : {user.username}</div>
            </div></div>
            )
        }

        )
        return (
            <div>
                <h2>Blog</h2>
                <div>
                    {userList}
                </div>
            </div>


        )
    }

}

export default Blog