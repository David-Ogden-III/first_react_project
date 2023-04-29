import './App.css';
import { Container, Row, Col, CardHeader, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row className='mt-3'>
        <Col md='3'>
    <Card>
    <CardHeader>
      <CardTitle>
        Testing Title
      </CardTitle>
    </CardHeader>
      <CardBody>
        <CardText>
          Hello World!
        </CardText>
        <Button color='primary'>Add New Workout</Button>
      </CardBody>
    </Card>
    </Col>
    </Row>
    </Container >
  );
};

export default App;
