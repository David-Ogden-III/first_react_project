import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './exerciseComps/ExerciseForm';

export default function AddExerciseCard({ workoutList, onSubmit, exerciseList }) {

    return (
        <Row>
            {workoutList.map(workout =>
                <Col md='3' xs='4' key={workout.id} className='mt-3'>
                    {workout.id !== 0 ?
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    {workout.focus}<br />{workout.date}
                                </CardTitle>
                            </CardHeader>
                            <CardBody className='mx-auto'>
                                <ExerciseForm onSubmit={onSubmit} workoutList={workoutList} exerciseList={exerciseList} />
                            </CardBody>
                        </Card>
                        : null}
                </Col>
            )}
            </Row>
    )
};