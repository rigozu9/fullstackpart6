import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const Anecdotes = () => {
    const sortedAnecdotes = useSelector(state => 
      state.anecdotes
        .sort((a, b) => b.votes - a.votes)
        .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    )
    const dispatch = useDispatch()
  
    const vote = (id) => {
      dispatch(voteAnecdote(id))
    }
    

    return (
      <div>
        {sortedAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
  


export default Anecdotes