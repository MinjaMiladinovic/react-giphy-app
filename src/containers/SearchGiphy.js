import React, { Component } from 'react'
import NavBar from './NavBar';

class SearchGiphy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      search: '',
      API_KEY: 'ggYrHfBJkzUQZt7gchlKVQgFruYItIjm',
      API_URL: 'https://api.giphy.com/v1/gifs/search?api_key'
    };
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  fetchGif() {
    fetch(`${this.state.API_URL}=${this.state.API_KEY}&q=${this.state.search}&limit=24&offset=0&rating=G&lang=en`)
    .then(res => res.json())
    .then(data => this.setState({gifs: data.data}));
  };

  handleForm = e => {
    e.preventDefault();

    this.setState({
      search: ''
    });
  };

  render() {
    let myList = this.state.gifs.map((item) => {
      let showGIfts = item.images.downsized.url;
      return (
        <div key={item.id} className="myClass">
          <img src={showGIfts} alt="test" className="card-img-top" />
          <div className="card-footer">
            <a className="myText" href={item.embed_url} target="_blank"><p>{item.title}</p></a>
          </div>
        </div>
      );
    });

    return (
      <div>
        <NavBar />
        <div className="text-center">
          <form onSubmit={this.handleForm}>
            <input 
              className="myInput" 
              type="text" 
              value={this.state.search} 
              onChange={this.handleChange.bind(this)} 
              placeholder="Search gif"/>

            <button 
              className="myBtn" 
              onClick={this.fetchGif.bind(this)}>
              <i className="fa fa-search"></i>  
            </button>
          </form>        
        </div>

        <div className="container ">
          <div className="row justify-content-md-start top">
            {myList}
          </div>
        </div>

      </div>
    );
  };
};

export default SearchGiphy;