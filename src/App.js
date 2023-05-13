import { Header } from './components/Header';
import { useState } from 'react';
import AddExerciseCard from './components/addExerciseCard'
import { Container } from 'reactstrap';

let nextId = 10;

function App() {
  const [workoutList, setWorkoutList] = useState([{ id: 0, focus: '', date: '' }])

  const addTitle = (newTitleData) => {
    const newTitle = { id: nextId++, ...newTitleData }
    setWorkoutList([...workoutList, newTitle])
  }

  return (
    <div>
      <Header onSubmit={addTitle}/>
      <Container>
      <AddExerciseCard workoutList={workoutList} />
      </Container>
    </div>

  );
};

export default App;
