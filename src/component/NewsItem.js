      import React, { Component } from 'react'

      export class NewsItem extends Component {
        render() {
          let{title,descr,imageUrl,newsUrl}=this.props;
          return (
            <>
            <div className='mx-3 my-3   container'>
              <div className="card " style={{width: "18rem"}}>
        <img  style={{width:"286px",height:"161px"}}src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}..</h5>
          <p className="card-text">{descr}...</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
        </div>
      </div>
            </div>
            
             </>
          )
        }
      }

      export default NewsItem