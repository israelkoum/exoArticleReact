import React from 'react'
import sak from '../img/sak.jpg'


class PostBlog extends React.Component {
    constructor (props){
        super (props)

    }

    handleClick (e,_id) {
        console.log(_id)
        this.props.switchMode(false)
        this.props.setActivePost(_id)
    }

    render () {
        const {headline,pub_date,lead_paragraph, _id} = this.props.article
        return(
            <div className="card col-sm-4" style={myStyle}>
                <img src={sak} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" onClick = {e => this.handleClick(e, _id)}>{headline.main}</h5> 
                        <p className="card-text">{lead_paragraph}</p>
                        <p className="">{pub_date}</p>
                    </div>
            </div>
        
        ) 
    }
   

}
const myStyle = {
    width:"18rem"
}

export default PostBlog