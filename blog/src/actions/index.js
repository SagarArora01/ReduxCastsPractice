import Axios from 'axios';

export const FetchPosts = 'fetchposts';
const RootUrl = 'http://reduxblog.herokuapp.com/api';
const ApiKey = 'Paperclip321';

export function fetchPosts(){
    
    const request = axios.get(`${RootUrl}/posts?Key-${ApiKey}`)

    console.log (request);
    return {
        type : FetchPosts,
        payload : request 
    };
} 