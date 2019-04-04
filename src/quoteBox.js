import React from 'react'
import axios from 'axios'
import parser from 'html-react-parser'

import './box.css'

class QuoteBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
      author:'',
      Quotes: []
    }
 
    this.handleRequest = this.handleRequest.bind(this)
  }

  componentDidMount(){
    let self = this;
  axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback="`)
    .then(function(response){
      
      self.setState({
        quotes: response.data[0].content,
        author: response.data[0].title,
      })
    })
  }


  handleRequest(){
    
  let self = this;
  axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback="`)
    .then(function(response){
      alert(response.data[0].content)
      self.setState({
        quotes: response.data[0].content,
        author: response.data[0].title
      })
    })
  }

  render() {
    return (
      <div>
        <div className='box'>
            <div className="text">
              {parser(this.state.quotes)}
          </div>
          <p className="author">- {this.state.author.toUpperCase()}</p>
          <footer>
            <div className="mediaIcons">
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-facebook-square"></i>
            </div>
          </footer>
        </div>
        <button className="btn btnQuote" onClick={this.handleRequest}>New Quote</button>

      </div>



    )
  }

}

export default QuoteBox;