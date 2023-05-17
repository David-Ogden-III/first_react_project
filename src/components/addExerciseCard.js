import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './exerciseComps/ExerciseForm';
import ModalForm from './focusComps/ModalForm';

export default function AddExerciseCard({ workoutList, addExercise, exerciseList, onSubmit }) {

    return (
        <Row>
            {workoutList.map(workout =>
                <Col md='2' xs='4' className='my-2' key={workout.id}>
                    {workout.id !== 0 ?
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    {workout.focus}<br />{workout.date}
                                </CardTitle>
                            </CardHeader>
                            <CardBody className='mx-auto'>
                                <ExerciseForm onSubmit={addExercise} workoutList={workoutList} exerciseList={exerciseList} />
                            </CardBody>
                        </Card>
                        : <Card>
                            <CardHeader>
                                <CardTitle>
                                   Create New Workout
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <ModalForm onSubmit={onSubmit}/>
                            </CardBody>
                        </Card>
                    }
                </Col>
            )}
        </Row>
    )
};