import React from 'react'
import axios from 'axios'
import parser from 'html-react-parser'
import '../Css/box.css'

let colors, quoteText, quoteAuthor, t_icon, f_icon, btn, quoteLogo;

colors = ['#293C56', '#71a0a5', '#6F5E76', '#88A096', '#71a0a5', '#444444', '#567568', '#C9B1BD', '#305f72', '#30BCED', '#73FBD3', '#6b8c42'];

// color = colors[Math.floor(Math.random() * colors.length)];
function fade(ms){ 
  return function(x){
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}

function textOpacity(val){
  return (
    quoteText.style.opacity = val,
    quoteAuthor.style.opacity = val,
    t_icon.style.opacity = val,
    f_icon.style.opacity = val
  )
}

function changeIconColor(icon,color){
  icon = document.getElementsByClassName(icon);
  for(let i = 0; i < icon.length; i++){
   icon[i].style.color = color
  }
}

function randomColor(color){
  quoteText = document.querySelector('.text');
  quoteAuthor = document.querySelector('.author');
  t_icon = document.querySelector('.t-icon');
  f_icon = document.querySelector('.f-icon');
  quoteLogo = document.querySelector('.quote-symbol');
  btn = document.querySelector('.btn');

  color = color[Math.floor(Math.random() * colors.length)]
  return (
    // quoteText.style.color = color,
    // quoteAuthor.style.color = color,
    btn.style.backgroundColor = color,
    quoteLogo.style.backgroundColor = color,
    changeIconColor('fab',color)
  )
};

class QuoteBox extends React.Component {
  constructor(){
    super();
    this.state = {
    quotes: '',
    author:'',
    isLoading: false
    }
    this.handleRequest = this.handleRequest.bind(this)
  }

  getQuote = (timer) => {
    
    return axios.get(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&timestap=${new Date().getTime()}`)

    .then(fade(timer))
    .then(
      res => {
      const {content, title} = res.data[0];
      randomColor(colors);
      textOpacity(1);

      console.log(res.data[0])
      this.setState({ 
        quotes: content.rendered,
        author: title.rendered,
        isLoading: false
      })
    });

  }

  componentDidMount(){
    this.getQuote();
  }

  handleRequest(){
    textOpacity(0);
    this.getQuote(500)
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', positio: 'relative'}}>
        <div id="quote-box" className="box-wrapper" >
        <div className='box'>
          
          <div className="quote-symbol"></div>
          <div className="quote-content">
            {/* <h1>Quote</h1> */}
            <div id="text" className="text">
              {/* the <p></p> tag is coming with the data collected from axios */}
              {parser(this.state.quotes)}
              <p id="author" className="author">{parser(this.state.author)} </p>
              <div className="mediaIcons">
                  <a  id="tweet-quote" rel="noopener noreferrer" target="_blank" href="https://twitter.com/intent/tweet"><i className="fab fa-twitter-square t-icon"></i></a>
                  <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square f-icon"></i></a>
                </div>
              </div>

              <footer>
                <div>
                  <button id="new-quote" className="btn btnQuote" onClick={this.handleRequest}>get new quote</button>
                </div>
              </footer>
            </div>
          </div>
          </div>

          <footer id="statement">
            <p>Random quote app, design and made by <a href="http://leonelmatos.com">Leonel Matos</a> as part as his learning path to Web Developmetn from FCC.</p>
            <p><em>&#x2014; Quotes data from <a href="https://quotesondesign.com/">Quotes Design</a> &#x2014;</em></p>
         </footer>
      </div>
    )
  }
}

export default QuoteBox;