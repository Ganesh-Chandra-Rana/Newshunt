import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
  constructor(props){
    super(props);
    console.log("I am constructor");
    this.state={
      articles:[],
      loading:true
    }
  }
  async componentDidMount(){ //run cdm after render
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=704830d7e65c48c5b76ecc4cdb151d51&page=1&pagesize=10";
    let data = await fetch(url);
    let parsedData =await data.json() //async & await work as try/catch block and it will work as promise.
    // console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
    page:1});
  }
  onNextClick= async()=>{
console.log("next clicked");
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=704830d7e65c48c5b76ecc4cdb151d51&page=${this.state.page+1}&pagesize=10`;
let data = await fetch(url);
let parsedData =await data.json() //async & await work as try/catch block and it will work as promise.
// console.log(parsedData);
this.setState({
 
  page:this.state.page+1,
  articles:parsedData.articles,

  })
  
  }
  onPrevClick=async ()=>{
    console.log("Prev clicked");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=704830d7e65c48c5b76ecc4cdb151d51&page=${this.state.page-1}&pagesize=10`;
let data = await fetch(url);
let parsedData =await data.json() //async & await work as try/catch block and it will work as promise.
// console.log(parsedData);
this.setState({
  page:this.state.page-1,
  articles:parsedData.articles});

      }
  render() {
    return (
      
  <div className="container my-3">
    
        <h2>NewsHunt - Top Headlines</h2>
        {console.log(this.state.totalResults)}
         {console.log(this.state.page)}
         {console.log(this.state.pagesize)}
         
     <div className="row my-3">
     {this.state.articles.map((element)=>{
   return <div className="col-md-4 my-3 " key={element.url}>
    <NewsItem  title={element.title?element.title.slice(0,35):" "} descr={element.description?element.description.slice(0,80):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
  </div>
      }
      )
   }
           
         </div>
         <div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1}  type="button" className="btn btn-primary" onClick={this.onPrevClick}>&larr; Previous</button>
             <button disabled={this.state.page>=this.state.totalResults/10} type="button" className="  btn btn-primary" onClick={this.onNextClick}>Next&rarr;</button>
             </div> 
            
     </div>
     

    )
  }
}

export default News