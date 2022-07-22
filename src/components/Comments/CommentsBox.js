import React, { useEffect, useState } from 'react'

import { editComment, postComment } from '../../services/comments'
export default function CommentsBox({ currentId, currentEmail, currentContent }) {

  const [email, setEmail] = useState('')
  const [id, setId] = useState(null)
  const [content, setContent] = useState('')

  useEffect(() => {
    setId(currentId)
    setEmail(currentEmail)
    setContent(currentContent)
  }, [currentId, currentEmail, currentContent])


  const onChange = (event) => {
    if (event.target.id === 'email')
      setEmail(event.target.value)
    if (event.target.id === 'content')
      setContent(event.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let comment = { id, email, content }
    console.log(comment)
    if(id != null){
      editComment(comment)
    }else{
      postComment(comment)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" id="email" onChange={onChange} value={email} placeholder="Email" className="form-control" />
        <textarea type="textarea" id="content" onChange={onChange} value={content} placeholder="Add a comment..." className="form-control" />
        <input type="submit" id="submit" value="Comment" className="btn btn-primary" />
      </form>
    </div>
  )
}
