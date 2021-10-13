import React, { Component } from 'react';
import HashTag from './HashTag/HashTag';
import './Search.scss';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
      searchResult: [],
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInput = e => {
    this.setState({
      inputData: e.target.value,
    });
  };

  inputKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleReset();
      this.handleSearch();
      console.log(this.state.inputData);
    }
  };

  handleSearch = searchResult => {
    console.log(this.state.inputData);
    fetch('https://f960-211-106-114-186.ngrok.io/product/search', {
      method: 'POST',
      body: JSON.stringify({
        keyword: this.state.inputData.split(' '),
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과: ', result);
        this.setState({
          searchResult: result,
        });
      });
  };

  // 인풋창에 엔터치면 -> 검색어 쓴것(e.target.value) -> 배열에 담아서
  // ->post

  handleReset = () => {
    this.setState({
      inputData: '',
    });
  };

  render() {
    // let arr = '사과 쥬스';
    // let arr2 = arr.split(' ');
    // console.log(arr2);
    return (
      <>
        <div className="searchArea">
          <div className="searchBox">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="searchInput"
                placeholder="SEARCH"
                onChange={this.handleInput}
                value={this.state.inputData}
                onKeyPress={this.inputKeyPress}
              />
              <button>
                <i className="fas fa-ban" onClick={this.handleReset}></i>
              </button>
              <button>
                <i className="fas fa-search" onClick={this.handleReset}></i>
              </button>
            </form>
            <HashTag />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
