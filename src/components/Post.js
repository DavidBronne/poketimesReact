import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {

    state = {
        post:null
    }
    
    componentDidMount() {

        let id = this.props.match.params.post_id
        console.log(this.props.match.params.post_id);
        
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then( res => {
                console.log(res.data);
                this.setState({
                    post : res.data
                })
                console.log(this.state);
                
            })
        
        
    }

    render(){
        const post = this.state.post ? 
        (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p className="">{this.state.post.body}</p>
             </div>
        ) : (
            <div>No post yet</div>
        )
        
        return (
            <div>{post}</div>
        )

    }

}

export default Post;
