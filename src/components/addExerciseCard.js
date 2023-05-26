import { Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ModalForm from './focusComps/ModalForm';
import ExerciseModal from './exerciseComps/ExerciseModal';

export default function AddExerciseCard({ workoutList, addExercise, exerciseList, onSubmit, cardId, deleteExercise, editExercise }) {

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
                                <ExerciseModal onSubmit={addExercise} workoutList={workoutList} exerciseList={exerciseList} editExercise={editExercise} cardId={cardId} deleteExercise={deleteExercise} />
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