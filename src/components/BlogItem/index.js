import {Link} from 'react-router-dom'

// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listing} = props
  const {title, imageUrl, avatarUrl, topic, author, id} = listing

  return (
    <Link to={`/blogs/${id}`} className="topic">
      <div className="main1">
        <div className="main">
          <div>
            <img src={imageUrl} className="image1" alt="avarar" />
          </div>

          <div className="inside">
            <h1 className="topic">{topic}</h1>
            <p className="topic">{title}</p>
            <div className="auth">
              <img src={avatarUrl} className="avatar" alt={author} />
              <p className="topic">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
