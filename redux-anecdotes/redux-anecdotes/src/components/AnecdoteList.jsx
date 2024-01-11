import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const anecdotes = useSelector((state) =>
  state.anecdotes
      .filter(
        (anecdote) =>
          typeof anecdote.content === 'string' &&
          anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      )
    )
  console.log(anecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote ) => {
    dispatch(voteAnecdote(anecdote .id))
    dispatch(createNotification(`Voted for '${anecdote.content}'`))
    setTimeout(() => {dispatch(createNotification(null))}, 5000)
  }
  
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}
  


export default Anecdotes