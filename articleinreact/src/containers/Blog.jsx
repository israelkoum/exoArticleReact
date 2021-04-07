import React, {Component as ReactComponent} from 'react'
import PostBlog from '../components/PostBlog'
import PostBlogActive from '../components/PostBlogActive'

class Blog extends ReactComponent {
    constructor () {
        super()

        this.state = {
            listBlog : [],
            blog:true,
            activePost:''

        }

    }
    
    componentDidMount() {
        fetch ('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Ya565RqwfFxO9x3eWWO1wa2okbBd49s3')
            .then(response => response.json())
            // .then(({response}) =>  response.docs.map(article => this.setState({listBlog:[...this.state.listBlog, article]})))
            .then(({response}) => this.setState({listBlog:[...this.state.listBlog, ...response.docs]}))
            
           
    }

    switchMode(mode) {
        this.setState({blog:mode})
        console.log('switch',this.state.blog)
        console.log('switch', mode)
    }

    setActivePost (id) {
        this.setState({activePost:id})
        console.log('information received', this.state.activePost)
        console.log('information received', id)

    }
    render(){
        const post = this.state.listBlog.find(article  => article._id ===this.state.activePost)
        return(            
            
               <div className="container">
                   {
                       this.state.blog?  (<div className="row">
                       {this.state.listBlog.map((article, index) => <PostBlog key={index} article={article} switchMode = {(elt) => this.switchMode(elt)} setActivePost = { (elt) => this.setActivePost(elt)} />)}
                       </div>): <PostBlogActive  article = {post} switchMode = { (elt) => this.switchMode(elt)} />
                    }
                  
               </div>
                    
                
                    
        )
    }
    
    
}

export default Blog 