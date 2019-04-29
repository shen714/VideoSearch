import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';


class App extends React.Component{
    state = {videos: [], selectedVideo: null};
    componentDidMount(){
        this.onSearchSubmit("love");
    }

    onSearchSubmit(term){
        youtube.get('./search', {
            params: {
                q: term
            }
        }).then(response => 
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            }));
    }

    onVideoSelect(video){
        this.setState({selectedVideo: video});
    }

    render(){
        return (
            <div className="ui container" >
                <SearchBar onSubmit={term => this.onSearchSubmit(term)}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={video => this.onVideoSelect(video)} 
                                videos={this.state.videos}/>
                        </div> 
                    </div>
                </div>    
            </div>
        );
    }
}
export default App;