import React, { Component } from 'react'

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ''
    }
  }

  componentDidMount() {
    const users = 'https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json'
    fetch(users)
      .then(res => res.json())
      .then(data => this.setState({ data: data.Reggae }))
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    var list = this.state.data;
    var searchStr = this.state.search.trim().toLowerCase();
    if (searchStr.length > 0) {
      list = list.filter((letter) => {
        return letter.toLowerCase().match(searchStr);
      });
    }

    return (
      <div>
        <h1 className="display-4">UsersList!</h1>
        <input type="text" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
          {
            list.map((item, index) => {
              return <li className="list-group-item" key={index}>{item}</li>
            })
          }
      </div>
    )
  }
}