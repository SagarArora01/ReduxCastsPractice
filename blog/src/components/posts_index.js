import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";


class PostsIndex extends Component{
	ComponentDidMount(){
		this.props.fetchPosts();
	}

	render(){
		return(
			<div>
				PostsIndex
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);