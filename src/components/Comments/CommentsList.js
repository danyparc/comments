import React, {useEffect, useState} from 'react'
import { getComments } from '../../services/comments'
import Comment from './Comment'

function CommentsList() {
  const [comments, setComments] = useState([])
  // const [status, setStatus] = useState()
  
  useEffect(() => {
    getComments()
      .then(comments => setComments(comments))
  }, [setComments])
  

  return (
    <div>
      {comments.map((comment) => <Comment key={comment.id} id={comment.id} email={comment.email} content={comment.content} />)}
    </div>
  )
}

export default CommentsList