import React from "react"
import { connect, } from 'react-redux'
import { Link, } from 'react-router-dom'
import { Segment, Header, Container } from "semantic-ui-react"

const BlogView = ({blog = {} }) => (
    <Container>
        <Link to="/blogs">View All Blogs</Link>
        <Segment>
            <Header>{blog.name}</Header>
            <p>{blog.body}</p>
        </Segment>
    </Container>
)

const mapStateToProps = (state, props) => {
    return { blog: state.blogs.find( b => b.id === parseInt(props.match.params.id )) }
  }
    

export default connect(mapStateToProps)(BlogView)