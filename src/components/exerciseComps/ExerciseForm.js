import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Row, Col } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import AddExercise from './AddExercise';
import { exerciseFormValidation } from './ExerciseFormValidation';


function ExerciseForm({ onSubmit, exerciseList, workoutList }) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        const newExercise = {
            lift: values.lift,
            weight: values.weight,
            reps: values.reps
        };
        onSubmit(newExercise);
        console.log(newExercise);
        resetForm();
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                View Workout
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                </ModalHeader>
                <ModalBody>

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
                    <AddExercise exerciseList={exerciseList} workoutList={workoutList} />
                </ModalBody>
            </Modal>
        </>
    );
};


export default ExerciseForm;