import { FetchPosts } from '../actions';
import _ from 'lodash';

export default function(state = {},action){
	switch (action.type){
		case FetchPosts:
			return _.mapKeys(action.payload.data, 'id' );
		default:
			return state;
	}
}