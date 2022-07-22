import React, { useState } from 'react'
import { deleteComment } from '../../services/comments'
import CommentsBox from './CommentsBox'

function Comment({ id, email, content }) {
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState('')
  const onDelete = () => { 
    // TODO: handle updates of db using redux
    deleteComment({id})
      .then(() => window.location.reload())
      .catch(() => setError('Something went wrong :c'))
  }
  const toggleEditMode = () => setEditMode(!editMode)
  return (
    <div className='card'>
      <div className="card-body">
        {!editMode ? (
          <>
            <div className="author">{email}</div>
            <div className="content">{content}</div>
            <div className="action-group text-end">
              <span className="card-link link-primary" onClick={toggleEditMode}>Edit</span>
              <span className="card-link link-danger" onClick={onDelete}>Delete</span>
              {error && <p class="text-center text-danger">{error}</p>}
            </div>
          </>
        ) : (
          <CommentsBox onCancel={toggleEditMode} currentId={id} currentEmail={email} currentContent={content} />
        )}
      </div>
    </div>
  )
}

export default Comment