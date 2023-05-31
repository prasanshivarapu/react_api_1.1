import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogd: []}

  componentDidMount() {
    this.getdetails()
  }

  getdetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedata = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      author: each.author,
    }))
    this.setState({blogd: updatedata})
  }

  render() {
    const {blogd} = this.state
    return (
      <div>
        {blogd.map(each => (
          <BlogItem listing={each} key={each.id} />
        ))}
      </div>
    )
  }
}

export default BlogList
