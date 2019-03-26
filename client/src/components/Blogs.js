import React from 'react';
import BlogForm from './BlogForm'
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getBlogs, } from '../reducers/blogs';
import { Container, Header, Card, Button,  } from 'semantic-ui-react';


class Blogs extends React.Component {
  state = { showForm: false, }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }
  
  blogs = () => {
    return this.props.blogs.map(blog =>
      <Card key={blog.id}>
        <Card.Content>
          <Card.Header>
            {blog.name}
          </Card.Header>
          <Card.Description>
            {blog.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>
            View Blog Post
      </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">
          <Card.Group itemsPerRow={4}>
            {this.blogs()}
          </Card.Group>
        </Header>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}

export default connect(mapStateToProps)(Blogs);