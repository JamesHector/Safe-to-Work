import React from 'react';
import axios from 'axios';

//var amazonAPI = 'https://2c8w48njad.execute-api.eu-west-2.amazonaws.com/test/helloworld?name=JamesHector&city=Bristol'

//var amazonAPI = 'https://2c8w48njad.execute-api.eu-west-2.amazonaws.com/test/helloworld?name='

//const axios = require('axios');

// class Blog extends Component {
//   componentDidMount () {
//       axios.get('https://2c8w48njad.execute-api.eu-west-2.amazonaws.com/test/helloworld?name=James&city=Bristol')
//       //axios.get('https://77e1wico35.execute-api.eu-west-2.amazonaws.com/test/helloworld?name=James&city=Bristol')
//       //axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       console.log(response)
//     });
//   }

const api = (name) => {
    var amazonAPI = 'https://2c8w48njad.execute-api.eu-west-2.amazonaws.com/test/helloworld?name='
    console.log(name)
    amazonAPI = amazonAPI + name + '&city=12/08/1964'
    axios.get(amazonAPI)
      .then(response => {
        //console.log(response)
      });
      return (null)
    }

    // function formatDate(date) {
    //   return date.toLocaleDateString();
    // }

export default api;