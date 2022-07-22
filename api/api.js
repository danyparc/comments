import express from 'express'
import { Comment } from './db/Comment'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json())

app.get('/api/v1', (_, res) => res.send('Welcome to Comments API'))

app.get('/api/v1/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll()
    console.log('>>> Comments retrieved')
    res.status(200).json(comments)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.get('/api/v1/comments/:id', async (req, res) => {
  const commentID = req.params.id
  try {
    const comment = await Comment.findOne({ where: { id: commentID } })
    if (comment === null) {
      console.log(`>>> Comment ${commentID} not found`)
      res.status(404).json({
        message: "not found",
      });
    }else{
      console.log(`>>> Comment ${commentID} retrieved`)
      res.status(200).json(comment)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.post('/api/v1/comments', async (req, res) => {
  const comment = req.body
  try {
    const newComment = await Comment.create(comment)
    console.log('>>> New comment created')
    res.status(201).json(newComment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.put('/api/v1/comments/:id', async (req, res) => {
  const commentID = req.params.id
  const { email, content } = req.body
  try {
    const comment = await Comment.findOne({ where: { id: commentID } })
    const updatedComment = await comment.update({ email, content })
    console.log(`>>> Comment ${commentID} updated`)
    res.status(200).json(updatedComment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.delete('/api/v1/comments/:id', async (req, res) => {
  const commentID = req.params.id
  try {
    const countRow = await Comment.destroy({ where: { id: commentID } })
    if (countRow === 0) {
      console.log(`>>> Comment ${commentID} not found`)
      res.status(404).json({message: "Not found"});
    } else {
      console.log(`>>> Comment ${commentID} deleted`)
      res.status(200).json({
        message: "Comment deleted",
        count: countRow,
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

app.listen(8080, () => {
  console.log('listening on http://localhost:8080')
})