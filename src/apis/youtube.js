import Axios from 'axios';

const KEY = 'AIzaSyC7Ky6eikCMVVkYOPZVQvun1f2802ci28w';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        key: KEY
    }
});