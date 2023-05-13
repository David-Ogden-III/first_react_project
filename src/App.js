import { Header } from './components/Header';
import { useState } from 'react';
import AddExerciseCard from './components/addExerciseCard'
import { Container } from 'reactstrap';

let nextId = 10;
let superNextId = 100

function App() {
  const [workoutList, setWorkoutList] = useState([{ id: 0, focus: '', date: '' }])
  const [exerciseList, setExerciseList] = useState([{ id: 0, lift: '', weight: '', reps: '' }])

  const addTitle = (newTitleData) => {
    const newTitle = { id: nextId++, ...newTitleData }
    setWorkoutList([...workoutList, newTitle])
  }

  const addExercise = (newExerciseData) => {
    const newExercise = { id: superNextId++, ...newExerciseData }
    setExerciseList([...exerciseList, newExercise])
  }


  return (
    <div>
      <Header onSubmit={addTitle} />
      <Container>
        <AddExerciseCard workoutList={workoutList} onSubmit={addExercise} />
      </Container>
    </div>

  );
};

export default App;
