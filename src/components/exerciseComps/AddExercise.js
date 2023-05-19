import { Col, Row, Button } from "reactstrap";

const AddExercise = ({ exerciseList, cardId }) => {    
    const pleaseWork = exerciseList.filter(
        exercise => exercise.cardId === cardId
    );
    
    return (
        <>
            {pleaseWork.map(exercise => (
                <Row key={exercise.id}>
                    {exercise.id !== 0 ?
                        <>
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
                        </>
                        : null}
                </Row>

            ))
            }
        </>
    )
};

export default AddExercise;