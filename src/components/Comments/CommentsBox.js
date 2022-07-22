import React, { useEffect, useState } from 'react'

import { editComment, postComment } from '../../services/comments'
export default function CommentsBox({ currentId, currentEmail, currentContent, onCancel }) {

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

    console.log({ id });
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let comment = { id, email, content }
    console.log(comment)
    // TODO: handle updates of db using redux
    if (id != null) {
      editComment(comment)
        .then(() => window.location.reload())
    } else {
      postComment(comment)
        .then(() => window.location.reload())
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" id="email" onChange={onChange} value={email} placeholder="Email" className="form-control" />
        <textarea type="textarea" id="content" onChange={onChange} value={content} placeholder="Add a comment..." className="form-control" />
        <div className="btn-group d-flex flex-row-reverse">
          {
            currentId ? (
              <div className="p-4">
                <input type="submit" id="submit" value="update" className="btn btn-outline-primary" />
                <span id="cancel-btn" className="link-danger" onClick={onCancel}>Cancel</span>
              </div>
            )
              : (
                <div className="p-2">
                  <input type="submit" id="submit" value="Comment" className="btn btn-primary p-2" />
                </div>)
          }
        </div>
      </form>
    </div>
  )
}
