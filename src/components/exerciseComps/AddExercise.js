import { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import { Formik, Field, Form } from 'formik';

const AddExercise = ({ exerciseList, cardId, onSubmit }) => {
    const [buttonFunction, setButtonFunction] = useState(true);

    const handleSubmit = (values, { resetForm }) => {
        const newExercise = {
            lift: values.lift,
            weight: values.weight,
            reps: values.reps,
            cardId: cardId
        };
        onSubmit(newExercise);
        console.log(newExercise);
        resetForm();
        setButtonFunction(!buttonFunction)
    };

    const editButton = () => {
        setButtonFunction(!buttonFunction);
    }

    const pleaseWork = exerciseList.filter(
        exercise => exercise.cardId === cardId
    );

    return (
        <>
            {pleaseWork.map(exercise => (
                <Row key={exercise.id}>
                    {exercise.id !== 0 ?
                        <>
                            {buttonFunction
                                ?
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
                                        <Button
                                            size='sm'
                                            type='button'
                                            className="my-1"
                                            onClick={editButton}
                                        >Edit
                                        </Button>
                                    </Col>
                                </>
                                :
                                <>
                                    <Formik
                                        initialValues={{
                                            lift: 'Select Exercise',
                                            weight: '',
                                            reps: ''
                                        }}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <Row>
                                            <Col xs='3'>
                                                <Field
                                                    name='lift'
                                                    as='select'
                                                    className='form-control'
                                                >
                                                    <option value='select'>Select Exercise...</option>
                                                    <option value='Bench Press'>Bench Press</option>
                                                    <option value='Squat'>Squat</option>
                                                    <option value='Row'>Row</option>
                                                </Field>
                                            </Col>
                                            <Col xs='2'>
                                                <Field
                                                    name='weight'
                                                    className='form-control'
                                                    placeholder='Weight'
                                                />
                                            </Col>
                                            <Col xs='2'>
                                                <Field
                                                    name='reps'
                                                    className='form-control'
                                                    placeholder='Reps'
                                                />
                                            </Col>
                                            <Col>
                                            <Button
                                                    size='sm'
                                                    type='submit'
                                                    className="my-1"
                                                >
                                                    Submit
                                                </Button>
                                            </Col>
                                            </Row>
                                        </Form>
                                    </Formik>
                                </>
                            }
                        </>

                        : null
                    }
                </Row>

            ))
            }
        </>
    )
};

export default AddExercise;