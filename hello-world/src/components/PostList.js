import React, { Component } from "react";
import axios from 'axios'

const itemStyle = {
    width: 200,
    margin: '20px auto',
    backgroundColor: 'white',
    padding: 20,
    boxShadow: "#0000001c 0px 10px 14px 5px"
}

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('posts-------------', state.posts)
        return null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('response.data', response.data)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })

            
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>List of Posts</h1>
                {
                    posts.length
                        ? posts.map(post => <div style={itemStyle} key={post.id}>{post.title}</div>)
                        : null
                }
                {posts.length == 0 && <h2>Loading...</h2>}
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList