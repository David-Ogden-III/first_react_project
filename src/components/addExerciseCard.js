import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './exerciseComps/ExerciseForm';
import { useState } from 'react';

let superNextId = 100

export default function AddExerciseCard({ workoutList }) {
    const [exerciseList, setExerciseList] = useState([{ id: 0, lift: '', weight: '', reps: '' }])

    const addExercise = (newExerciseData) => {
        const newExercise = { id: superNextId++, ...newExerciseData }
        setExerciseList([...exerciseList, newExercise])
    }

    return (
        <Row className='mt-3'>
            {workoutList.map(workout =>
                <Col md='3' xs='4' key={workout.id}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {workout.focus}<br />{workout.date}
                            </CardTitle>
                        </CardHeader>
                        <CardBody className='mx-auto'>
                            <ExerciseForm onSubmit={addExercise} />
                            
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Row>
    )
}