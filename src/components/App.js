import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';


class App extends React.Component{
    state = {videos: [], selectedVideo: null};
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

    onVideoSelect(video){
        this.setState({selectedVideo: video});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={term => this.onSearchSubmit(term)}/>
                <VideoDetail selectedVideo={this.state.selectedVideo}/>
                <VideoList onVideoSelect={video => this.onVideoSelect(video)} videos={this.state.videos}/>
            </div>
        );
    }
}
export default App;