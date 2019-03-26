import axios from "axios"

const BLOGS = 'BLOGS'
const ADD_BLOG = 'ADD_BLOG'
const UPDATE_BLOG = 'UPDATE_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'

export const getBlogs = () => {
    return (dispatch) => {
        axios.get('/api/blogs')
         .then( res => dispatch({ type: BLOGS, blogs: res.data }))
    }
}

// export const addBlog = (blog) => {
//     return (dispatch) => {
//         axios.post('/api/blogs', { blog })
//     }
// }

// export const updateBlog = (blog) => {
//     return (dispatch) => {
//       axios.put(`/api/blogs/${blog.id}`, { blog } )
//         .then( res => dispatch({ type: UPDATE_BLOG, blog: res.data }) )
//     }
//   }
  
//   export const deleteBlog = (id) => {
//     return (dispatch) => {
//       axios.delete(`/api/blogs/${id}`)
//         .then( () => dispatch({ type: DELETE_BLOG, id }) )
//     }
//   }


export default (state = [], action ) => {
  switch(action.type) {
    case BLOGS:
      return action.blogs
    // case ADD_BLOG:
    //   return [action.blog, ...state]
    // case UPDATE_BLOG:
    //   return state.map( b => {
    //     if (b.id === action.blog.id)
    //       return action.blog
    //      return b
    //   })
    // case DELETE_BLOG:
    //   return state.filter( b => b.id !== action.id )
    default:
      return state;
  } 
}
  