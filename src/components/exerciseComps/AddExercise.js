import { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import { Formik, Field, Form } from 'formik';

const AddExercise = ({ exerciseList, cardId, onSubmit, deleteExercise, editExercise }) => {
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

    // const toggleButton = () => {
    //     setButtonFunction(!buttonFunction)
    // }



    const pleaseWork = exerciseList.filter(
        exercise => exercise.cardId === cardId
    );

    const editButton = (idToUpdate) => {
        if (setButtonFunction !== buttonFunction) {
            setButtonFunction(!buttonFunction)
        } else {
            editExercise(idToUpdate)
        }
    }

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
                                    <Col xs='2'>
                                        <Button
                                            size='sm'
                                            type='button'
                                            className="my-1"
                                            onClick={editButton}
                                        >Edit
                                        </Button>
                                    </Col>
                                    <Col xs='2'>
                                        <Button
                                            size='sm'
                                            type='button'
                                            className='my-1'
                                            color="danger"
                                            onClick={() => deleteExercise(exercise.id)}
                                        >

                                            Delete
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
                                                        <option value='benchpress'>Bench Press</option>
                                                        <option value='squat'>Squat</option>
                                                        <option value='row'>Row</option>
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
                                                        type='button'
                                                        className="my-1"
                                                        onClick={() => editButton(exercise.id)}
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