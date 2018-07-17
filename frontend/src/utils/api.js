const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Categories
export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

// Posts
export const fetchPosts = (category) => {
  if (category) {
    return fetch( `${api}/${category}/posts` , { headers })
      .then(res => res.json())
      .then(data => data)
  } else {
    return fetch( `${api}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)
  }
}

export const fetchPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


export const addPost  = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
    })
  }).then(res => res.json())

export const deletePost  = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
  .then(data => data)


export const editPost  = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'Put',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
    })
  }).then(res => res.json())
  .then(data => data)
}


// Comments
export const fetchComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const deleteComment  = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
  .then(data => data)
