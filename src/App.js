import './App.css';
import { Container } from 'reactstrap';
import { Header } from './components/Header';
import ExerciseCard from './components/exerciseComps/ExerciseCard';

function App() {
  return (
    <div className='App'>
    <Header />
    <Container>
    <ExerciseCard />
    </Container>
    </div>
    
  );
};

export default App;
