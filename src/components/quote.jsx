import React,{useState,useEffect} from 'react'

import twittericon from '../twitter.svg'
import tumblericon from '../tumblr.svg'

const Quote = () => {
    const [quote,setQuote]=useState('title')
    const [author,setAuthor]=useState('')

    useEffect(()=>{
        getQuote()
    },[])


    const getQuote = ()=>{
        let url="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        fetch(url)
            .then(res =>res.json())
            .then(data =>{
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random()* dataQuotes.length);
                // console.log(randomNum)
                let randomQuote = dataQuotes[randomNum]
                // console.log(randomQuote)
                setQuote(randomQuote.quote)
                setAuthor(randomQuote.author)
            })
    }
    const handleClick=()=>{
        getQuote();
    }
  return (
    <div id='quote-box'>
      <div id="text">
        <p>{quote}</p>
      </div>
      <div id='author'>
        <p>{author}</p>
      </div>
      <div id='buttons'>
        <div className="social-media">
            <a href="#" id='twet-quote'>
                <span><img src={twittericon} alt="" /></span>
            </a>
            <a href="#" id='tumblr-quote'>
                <span><img src={tumblericon} alt="" /></span>
            </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quote
