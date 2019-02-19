import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component{
	renderFieldTitleField(field){
		return(
			<div>
				<input
					{...field}
				/>
			</div>
		);
	}
	render(){
		return(
			<form>
				<Field
					name='title'
					Component={this.renderFieldTitleField()}
				/>
			</form>
		);
	}

}

export default reduxForm({
	form: 'PostsNewForm'
})(PostNew);