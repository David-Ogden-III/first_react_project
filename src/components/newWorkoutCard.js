import { Row, Col, CardHeader, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const NewWorkoutCard = () => {
    return (
            <Row className='mt-3'>
                <Col md='3' xs='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-center'>
                                Choose your workout
                            </CardTitle>
                        </CardHeader>
                        <CardBody className='mx-auto'>
                            <Button color='primary'>Create Workout</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    );
};

export default NewWorkoutCard;