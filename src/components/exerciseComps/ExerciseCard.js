import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './ExerciseForm';

const ExerciseCard = ({addWorkout}) => {
    return (
            <Row className='mt-3'>
                <Col md='3' xs='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle name='focus' date='date'>
                            </CardTitle>
                        </CardHeader>
                        <CardBody className='mx-auto'>
                            insert image of exercise <br />
                            <ExerciseForm />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    );
};

export default ExerciseCard;