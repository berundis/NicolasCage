import React, { Component } from 'react';
import './App.css';
import { Route, NavLink} from 'react-router-dom'
import Video from "./videos/Video"
import AllVids from "./AllVids"
import Dancing from "./assets/videos/Dance.mp4"

class SoundBoard extends Component {

  state = { vids: AllVids }

  renderVideos = (renderProps) => {
    const VidId = renderProps.match.params.vidId
    const cageVid = this.state.vids.find((vid) => vid.id == VidId)
    if (cageVid)
      return <Video name={ cageVid.name} src={ cageVid.src } />
    else
      return (
        <div>
        <div className="border-div"><h1>PAGE NOT FOUND!</h1></div>
        <Video name="Dancing" src={Dancing} />
        </div>
      )
  }
  danceRender = (renderProps) => {
    return (
      <div>
        <iframe title="dance" src="https://giphy.com/embed/3ohhwMfw0rU0LQfFeg" width="480" height="350" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
    )
  }
  render() {

    const videoLinks = this.state.vids.map((vid) => {
      return (
        <NavLink activeClassName="active" to={ "/soundboard/" + vid.id } key={vid.name}>
          <button> { vid.name } </button>
        </NavLink>
      )
    })

    return (
      <div className="SoundBoard">
        <h1 className="border-div">SoundBoard</h1>
        <Route path="/soundboard" exact render={this.danceRender} />
        <Route path="/soundboard/:vidId" exact render={ this.renderVideos } />
        <ul>
          <li>
            { videoLinks }
          </li>
        </ul>
      </div>
    );
  }
}

export default SoundBoard;
