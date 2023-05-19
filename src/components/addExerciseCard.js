import { Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './exerciseComps/ExerciseForm';
import ModalForm from './focusComps/ModalForm';

export default function AddExerciseCard({ workoutList, addExercise, exerciseList, onSubmit, cardId }) {

    return (
        <>
            
                <Col xs='6' sm='4' md='3' lg='2' className='my-2' >
                    {workoutList.id !== 0 ?
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-center'>
                                    {workoutList.focus}<br />{workoutList.date}
                                </CardTitle>
                            </CardHeader>
                            <CardBody className='mx-auto'>
                                <ExerciseForm onSubmit={addExercise} workoutList={workoutList} exerciseList={exerciseList} cardId={cardId} />
                            </CardBody>
                        </Card>
                        : <Card>
                            <CardHeader>
                                <CardTitle className='text-center'>
                                   Create<br />New Workout
                                </CardTitle>
                            </CardHeader>
                            <CardBody className='mx-auto'>
                                <ModalForm onSubmit={onSubmit}/>
                            </CardBody>
                        </Card>
                    }
                </Col>
        </>
    )
};