import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

import anecdoteService from '../services/anecdotes'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newanecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newanecdote))

    dispatch(createNotification(`new anecdote created '${content}'`))
    setTimeout(() => {dispatch(createNotification(null))}, 5000)
  }

return (
  <div>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  </div>
  )
}

export default NewAnecdote
