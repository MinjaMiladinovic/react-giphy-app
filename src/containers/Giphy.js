import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchGif } from '../actions';
import NavBar from './NavBar';

class Giphy extends React.Component {
  componentDidMount() {
    this.props.fetchGif()
  }

  showMyGifs() {
    return _.map(this.props.myGif, (gif) => {
      let showGIfts = gif.images.downsized.url;
      return (
        <div className="myClass" key={gif.id}>
          <img src={showGIfts} alt="test" className="card-img-top" />
          <div className="card-footer">
            <a className="myText" href={gif.embed_url} target="_blank"><p>{gif.title}</p></a>
          </div>
        </div>
      )
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container ">
          <h1 className="display-4 text-primary top">TRENDING GIFS</h1>
          <div className="row justify-content-md-start top">
            {this.showMyGifs()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ myGif }) {
  return { myGif }
}

export default connect(mapStateToProps, { fetchGif })(Giphy)