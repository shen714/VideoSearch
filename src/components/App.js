import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/youtube';
import youtube from '../apis/youtube';


class App extends React.Component{
    state = {videos: []};
    onSearchSubmit(term){
        youtube.get('./search', {
            params: {
                q: term
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={term => this.onSearchSubmit(term)}/>
            </div>
        );
    }
}
export default App;