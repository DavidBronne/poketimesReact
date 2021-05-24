import React, {Component} from 'react';
/* import axios from 'axios'; */
import {connect} from 'react-redux';
import { deletePost } from '../actions/deletePost'

class Post extends Component {
   /*  state = {
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
    } */

    
    handleClick = () => {
        
           
        this.props.delete_post(this.props.post.id);
        this.props.history.push('/');
    }
    
    render(){

        const post = this.props.post ? 
        (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p className="">{this.props.post.body}</p>
                <div className="center">
                    <button className=" btn grey" onClick={this.handleClick}>
                        delete
                    </button>
                </div>
             </div>
        ) : (
            <div>No post yet</div>
        )
        
        return (
            <div>{post}</div>
        )

    }

}

const mapStateToProps = (state, ownProps) => {
    let post_id = ownProps.match.params.post_id;
    return {
        post:state.posts.find( post => {
            return post.id === post_id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /* delete_post: (id) => {dispatch({type:"DELETE_POST" , id:id })} */
        delete_post: (id) => {dispatch(deletePost(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);
