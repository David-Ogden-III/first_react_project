import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './exerciseComps/ExerciseForm';

export default function AddExerciseCard({ workoutList, onSubmit }) {

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
                            <ExerciseForm onSubmit={onSubmit} workoutList={workoutList} />
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Row>
    )
};