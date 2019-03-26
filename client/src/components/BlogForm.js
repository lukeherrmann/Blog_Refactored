import React from 'react';
import { connect, } from 'react-redux'
import { updateBlog, addBlog, } from '../reducers/blogs'
import { Form, } from 'semantic-ui-react';

class BlogForm extends React.Component {
  initialState = { 
    name: '', 
    body: '', 
  };

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id) 
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const blog = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateBlog : addBlog;
    dispatch(func(blog));
    closeForm();
  }

  render() {
    const { name, description, category, version, price, author, } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="body"
          defaultValue={ body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(BlogForm);