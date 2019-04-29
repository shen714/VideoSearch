import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    if(! selectedVideo){
        return <div>loading...</div>
    }

    return (
      <div className="ui segament">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
     </div>
    )
}

export default VideoDetail;