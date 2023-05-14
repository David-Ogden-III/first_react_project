import { Col, Row, Button } from "reactstrap";

const AddExercise = ({ exerciseList, workoutList }) => {
    return (
        <>
            <Row>
                <Col xs='3'>
                    Exercise
                </Col>
                <Col xs='2'>
                    Weight
                </Col>
                <Col xs='2'>
                    Reps
                </Col>
                <hr />
            </Row>
            {exerciseList.map(exercise =>
                <Row key={exercise.id}>
                    <Col xs='3'>
                        {exercise.lift}
                    </Col>
                    <Col xs='2'>
                        {exercise.weight}
                    </Col>
                    <Col xs='2'>
                        {exercise.reps}
                    </Col>
                    <Col>
                        <Button size='sm' type='submit' className="my-1">Edit</Button>
                    </Col>
                </Row>
                
            )
            }
        </>
    )
};

export default AddExercise;