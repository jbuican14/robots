import React from 'react';
import './styles.css';
import CardList from './components/card-list/CardList-component';
import Search from './components/search/Search-component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }

  onSearch = (e) => {
    //arrow function automaticall bind this to the class
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterSearchRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Mix of folks </h1>
        <Search placeholder="Search Robot ..." handleChange={this.onSearch} />
        <CardList robots={filterSearchRobots} />
      </div>
    );
  }
}

export default App;
