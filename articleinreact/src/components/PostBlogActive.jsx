import React from 'react'
import sak from '../img/sak.jpg'


const PostBlogActive = ({article, switchMode})=> {
    
    const {headline,pub_date,lead_paragraph, _id} = article
    return(
        <div className="card" style={myStyle}>
            <img src={sak} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" onClick = {e => this.handleClick(e, _id)}>{headline.main}</h5> 
                <p className="card-text">{lead_paragraph}</p>
                <p className="">{pub_date}</p>
            </div>
            <button className = "btn btn-primary" onClick={() => switchMode(true)}>Previous</button>
        </div>
    
    ) 
}
   


const myStyle = {
    width:"18rem"
}

export default PostBlogActive