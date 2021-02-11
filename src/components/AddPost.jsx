import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/postAction';

class AddPost extends Component {
    state = {
        title: "",
        body: ""
    }
    
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.addPost(post);
        
    }

    render() {
        return (
            <div style={{padding: 1}}>
                <h3>Add Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Body: </label><br/>
                        <textarea name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit">Add New Post</button>
                </form>
            </div>
        )
    }
}
AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(AddPost);