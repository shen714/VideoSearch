import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


class App extends React.Component{
    state = {videos: []};
    onSearchSubmit(term){
        youtube.get('./search', {
            params: {
                q: term
            }
        }).then(response => 
            this.setState({
                videos: response.data.items
            }));
        
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={term => this.onSearchSubmit(term)}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
export default App;