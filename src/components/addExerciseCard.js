import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './exerciseComps/ExerciseForm';
import { useState } from 'react';

let superNextId = 100

export default function AddExerciseCard({ titles }) {
    const [ exerciseList, setExerciseList ] =useState([{ id: 0, lift: '', weight: '', reps: ''}])
    
    const addExercise = (newExerciseData) => {
        const newExercise = { id: superNextId++, ...newExerciseData }
        setExerciseList([...exerciseList, newExercise])
      }

    return (
        <Row className='mt-3'>
            <Col md='3' xs='4'>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {titles.map(title => <div key={title.id}>{title.focus}{' '}{title.date}</div>)}
                        </CardTitle>
                    </CardHeader>
                    <CardBody className='mx-auto'>
                        <ExerciseForm  onSubmit={addExercise} />
                        <div>
                        {exerciseList.map(exercise => <p key={exercise.id}>{exercise.weight}x{exercise.reps}</p>)}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}