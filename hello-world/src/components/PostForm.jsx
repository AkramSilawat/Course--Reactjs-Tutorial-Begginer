import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: 'id001',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log('response', response)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='user-id'>User Id: </label>
                        <input
                            id="user-id"
                            placeholder='Enter user id'
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor='title'>Title: </label>
                        <input
                            id="title"
                            placeholder='Enter title'
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor='body'>Body: </label>
                        <input
                            id="body"
                            placeholder='Enter body'
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm