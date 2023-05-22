import { Button, FormGroup, Row, Col } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { exerciseFormValidation } from './ExerciseFormValidation';


function ExerciseForm({ onSubmit, cardId }) {

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
    };

    return (
        <>
            <Formik
                initialValues={{
                    lift: 'Select Exercise',
                    weight: '',
                    reps: ''
                }}
                onSubmit={handleSubmit}
                validate={exerciseFormValidation}
            >
                <Form>
                    <FormGroup>
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
                        <ErrorMessage name='lift'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm='4'>
                                <Field
                                    name='weight'
                                    className='form-control'
                                    placeholder='Weight'
                                />
                                <ErrorMessage name='weight'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                            {'x'}
                            <Col sm='4'>
                                <Field
                                    name='reps'
                                    className='form-control'
                                    placeholder='Reps'
                                />
                                <ErrorMessage name='reps'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                            <Col>
                                <Button size='md' type='submit'>Add</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Formik>
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
        </>
    );
};


export default ExerciseForm;