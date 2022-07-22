import React from 'react'
import CommentsBox from './CommentsBox'
import CommentsList from './CommentsList'

const CommentsLayout = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-start">Leave comments</h1>
        <CommentsBox />
        <CommentsList />
      </div>
    </div>
  )
}

export default CommentsLayout;
