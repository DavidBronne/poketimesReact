import React, {Component} from 'react';

class Post extends Component {

    state = {
        id:null
    }
    
    componentDidMount() {

        let id = this.props.match.params.post_id
        this.setState({
            id
        })
    }

    render(){
        return (
            <div className="">POST {this.state.id}</div>
        )
    }

}

export default Post;
