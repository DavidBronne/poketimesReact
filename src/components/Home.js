import React, {Component} from 'react';
/* import axios from 'axios'; */
import { NavLink } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';


class Home extends Component {
        
   /*  state = {
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
    */
    


    render () {
        console.log(this.props);
        
        const {posts} = this.props;

        const postsList = posts.length ? (
            posts.map( post => {
                return (

                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <NavLink to={'/' + post.id}>
                                <img src={Pokeball} alt="pok im"/>
                                <h1 className="card-title">{post.title}</h1>
                                <p className="">{post.body}</p>
                            </NavLink>
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    
}
}
 export default connect(mapStateToProps)(Home)