import { useState } from 'react';
export type AnecdotesType = {
  id: string;
  title: string;
  vote: number;
};

function App() {
  const anecdotes: AnecdotesType[] = [
    {
      id: '0',
      title: 'If it hurts, do it more often.',
      vote: 0,
    },
    {
      id: '1',
      title: 'Adding manpower to a late software project makes it later!',
      vote: 0,
    },
    {
      id: '2',
      title:
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote: 0,
    },
    {
      id: '3',
      title:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote: 0,
    },
    {
      id: '4',
      title: 'Premature optimization is the root of all evil.',
      vote: 0,
    },
    {
      id: '5',
      title:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote: 0,
    },
    {
      id: '6',
      title:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      vote: 0,
    },
    {
      id: '7',
      title: 'The only way to go fast, is to go well.',
      vote: 0,
    },
  ];
  const [anecdote, setAnecdote] = useState<number>(0);

  const onClick = () => {
    setAnecdote(Math.floor(Math.random() * anecdotes.length));
  };

  const onClickVote = (id: string) => {
    const selectedAnecdote = anecdotes.find((an) => an.id === id);
    console.log('Data', anecdotes);
    if (selectedAnecdote) {
      return (selectedAnecdote.vote = selectedAnecdote.vote + 1);
    }
  };
  console.log('anecdotes[anecdote]', anecdotes[anecdote]);

  return (
    <div>
      <p>{anecdotes[anecdote!].title}</p>
      <p>has {anecdotes[anecdote].vote} votes</p>
      <button onClick={() => onClickVote(anecdotes[anecdote].id)}>vote</button>
      <button onClick={onClick}>Next Anecdote</button>
    </div>
  );
}

export default App;
