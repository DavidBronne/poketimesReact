import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
        
    state = {
        posts:[]
    }
    
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res.data.slice(0,10));
            
                this.setState({
                    posts : res.data.slice(0,10)
                })
        })

    }
   
    


    render () {
        
        const {posts} = this.state;

        const postsList = posts.length ? (
            posts.map( post => {
                return (

                    <div className="post card" key={post.id}>
                    <div className="card-content">
                        <h1 className="card-title">{post.title}</h1>
                        <p className="">{post.body}</p>
                    </div>
                </div>
                    )
            })
        ) : (
            <div className="center">No posts yet</div>
        )

            return (
                <div className="container"> 
                    <h4 className="center">Home</h4>
                    <p>{postsList}</p>
                </div>
        )
    } 
}
 export default Home