import React, { Component } from 'react'
import _ from 'lodash'
import ReactDom from 'react-dom'
import SearchBar from './components/searchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'



const ApiKey = "" //insert your youtube api here

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('Ferrari california')
    }
    videoSearch(keyword){
        YTSearch({ key: ApiKey, term: keyword }, (data) => {
            this.setState({ 
                videos: data, 
                selectedVideo: data[0] 
            })
        })
    }

    render() {
        const videoSearch = _.debounce((keyword)=>{this.videoSearch(keyword)},1000)
        return (
            <div>
                <SearchBar onInputChange={videoSearch} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos={this.state.videos} />
                <VideoDetail video={this.state.selectedVideo} />

            </div>
        )
    }
}


ReactDom.render(<App />, document.querySelector('.container'))
