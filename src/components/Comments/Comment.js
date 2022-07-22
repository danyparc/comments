import React, { useState } from 'react'
import CommentsBox from './CommentsBox'

function Comment({ id, email, content }) {
  const [editMode, setEditMode] = useState(false)

  const onDelete = () => { }
  const onEdit = () => { }
  const toggleEditMode = () => setEditMode(!editMode)
  return (
    <div className='card'>
      {!editMode ? (
        <>
          <div className="author">{email}</div>
          <div className="content">{content}</div>
          <div className="action-group">
            <span className="link-primary" onClick={toggleEditMode}>Edit</span>
            <span className="link-primary" onClick={onDelete}>Delete</span>
          </div>
        </>
      ) : (
        <CommentsBox onCancel={toggleEditMode} onEdit={onEdit} currentId={id} currentEmail={email} currentContent={content} />
      )}
    </div>
  )
}

export default Comment