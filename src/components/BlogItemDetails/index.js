import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blog: {}, isLoading: true}

  componentDidMount() {
    this.getting()
  }

  getting = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const responce = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await responce.json()

    const update = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      author: data.author,
    }

    this.setState({blog: update, isLoading: false})
  }

  renderdetails = () => {
    const {blog} = this.state
    const {title, avatarUrl, imageUrl, content, author} = blog

    return (
      <div className="main11">
        <h1 className="topic">{title}</h1>
        <div className="auth">
          <img src={avatarUrl} alt={author} className="smallimg" />
          <p className="aut">{author}</p>
        </div>

        <img src={imageUrl} alt={imageUrl} className="imagein1" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderdetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
