import { FetchPosts } from '../actions';

export default function(state = {},action){
	switch (action.type){
		case FetchPosts:
			console.log(action.payload.data);
		default:
			return state;
	}
}