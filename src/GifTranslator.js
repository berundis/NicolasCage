import React, { Component } from 'react';
import './App.css';
import YodaCage from './assets/img/yodaCage.jpg'

const ApiKey = "MKW2ssqB6Qe4PR0bwSbFDlhSCZpNnjwE"


class GifTranslator extends Component {

  state = {
    gifs: [],
    phrase: "",
    yoda: ""
  }


  yodaText = (text) => {
    let t = text.split(" ")
    for(let i = 0; i < t.length; i++) {
      if (i !== t.length - 1){
        t[i] = `${t[i]}%20`
      }
    }
    return t.join("")
  }

  fetchGifs = () => {
    const text = this.state.phrase.split(" ")
    const array = []
    const ids = []
    for(let i = 0; i < text.length; i++){
      fetch(`http://api.giphy.com/v1/gifs/search?q=nicolas+cage+${text[i]}&limit=50&api_key=${ApiKey}`)
        .then(data => data.json())
        .then(data => {
          let j = 0
          while (ids.includes(data.data[j].id) && j < 50){
            j++
          }
          array.push(data.data[j])
          ids.push(data.data[j].id)
          if(i === text.length - 1){
            this.setState({gifs: array})
          }
        })
    }
  }

  fetchYoda = () => {
    const phrase = this.yodaText(this.state.phrase)
    fetch(`https://cors.io/?http://yoda-api.appspot.com/api/v1/yodish?text=${phrase}`)
    .then(data => data.json())
    .then(data => {
      this.setState({yoda: data.yodish})
    })
  }



  displayGifs = () => {
    return this.state.gifs.map((gif) => {
      return (
      <div key={gif.id}>
        <iframe title={gif.id} src={gif.embed_url} width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>)
    })
  }

  changeText = (e) => {
    this.setState({phrase: e.target.value})
  }

  submit = (e) => {
    e.preventDefault();
    this.fetchGifs();
    this.fetchYoda();
    this.setState({phrase: ""})
  }

  displayYoda = () => {
    return (
      <div className="yoda-div">
        <img src={YodaCage} height="200" width="200"/>
        <div className="yoda-text">{this.state.yoda}</div>
      </div>
    )
  }
  render() {
    return(
      <div>
        <div className="div-form">
          <form onSubmit={ this.submit }>
            <label htmlFor="phrase"><h3>Input Cage Sentence</h3></label>
            <input onChange={ this.changeText } type="text" id="phrase" name="phrase" value={ this.state.phrase } />
            <input type="submit" />
          </form>
        </div>
          <div className="gif-div">
            {this.state.gifs ? this.displayGifs() : null}
          </div>
          {this.state.yoda ? this.displayYoda() : null}
      </div>
    )
  }
}


export default GifTranslator;
