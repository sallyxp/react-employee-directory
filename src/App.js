import logo from './logo.svg';
import './App.css';
import API from './utils/API';
import EmpDir from './components/EmpDir';
import React from 'react';

class App extends React.Component {
  state = {
    users: [],
    usersFiltered: [],
    order: "ascend"
  };


componentDidMount() {
  this.getUsers();
}

getUsers = async () => {
  try {
    const response = await API.getUsers();
    console.group(response.data.results);
    const empDB = response.data.results.map(x => ({
      img: x.picture.medium,
      lastName: x.name.last,
      firstName: x.name.first,
      phone: x.phone,
      cell: x.cell,
      email: x.email
    }));
    this.setState({ users: empDB, usersFiltered: empDB });

  } catch (error) {
    console.log(error);
  }
}


export default App;
