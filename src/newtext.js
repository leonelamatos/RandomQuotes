import React from 'react'
import axios from 'axios'

import parser from 'html-react-parser'




class QuoteText extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quoteText: ''
    }
    this.clickThisButton = this.clickThisButton.bind(this)
  }


    clickThisButton(){
      let self = this;
    axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestap=${new Date().getTime()}`)
      .then(res => {
        const {content} = res.data[0];
        this.setState({quoteText: content})
      })
    }
    render() {
      return (

        <div>
          <h1>{this.state.quoteText}</h1>
          <button onClick={this.clickThisButton}>Click me</button>
        </div>




      )




    }



}

export default QuoteText