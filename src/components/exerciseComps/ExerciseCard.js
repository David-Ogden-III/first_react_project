import { Row, Col, CardHeader, Card, CardBody, CardTitle } from 'reactstrap';
import ExerciseForm from './ExerciseForm';

const ExerciseCard = () => {
    return (
            <Row className='mt-3'>
                <Col md='3' xs='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-center'>
                                Push - 5/15/23
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