import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import NewWorkoutModal from './newWorkoutModal';

const NewWorkoutCard = () => {
    return (
            <Row className='mt-3'>
                <Col md='3' xs='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-center'>
                                Create New Workout
                            </CardTitle>
                        </CardHeader>
                        <CardBody className='mx-auto'>
                            <NewWorkoutModal />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    );
};

export default NewWorkoutCard;