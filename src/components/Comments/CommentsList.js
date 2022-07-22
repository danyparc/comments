import React, {useEffect, useState} from 'react'
import { getComments } from '../../services/comments'
import Comment from './Comment'

function CommentsList() {
  const [comments, setComments] = useState([])
  // const [status, setStatus] = useState()
  
  useEffect(() => {
    getComments().then(comments => setComments(comments))
    // setComments([
    //   { id: 21, email: 'dany@hola.com', content: 'Esto es mi primer comment' },
    //   { id: 22, email: 'john.doe@localhost.com', content: 'Hello from Amsterdam' },
    //   { id: 23, email: 'ramiro.ramirez@meme.com', content: 'Nice page broh' },
    // ])

    // return () => {
    //   // second
    // }
  }, [setComments])
  

  return (
    <div>
      {comments.map((comment) => <Comment key={comment.id} email={comment.email} content={comment.content} />)}
    </div>
  )
}

export default CommentsList