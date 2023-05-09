import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Row, Col } from 'reactstrap'
import { Formik, Field, Form } from 'formik';


function ExerciseForm({ onSubmit }, { exercises }) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const newExercise = {
            lift: values.lift,
            weight: values.weight,
            reps: values.reps
        };
        onSubmit(newExercise);
        setModalOpen(false)
        console.log(newExercise);
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
                    >
                        <Form>
                            <FormGroup>
                                <Field
                                    name='lift'
                                    as='select'
                                    className='form-control'
                                >
                                    <option value='select'>Select Exercise...</option>
                                    <option value='BenchPress'>Bench Press</option>
                                    <option value='Squat'>Squat</option>
                                    <option value='Row'>Row</option>
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col sm='4'>
                                        <Field
                                            name='weight'
                                            className='form-control'
                                            placeholder='Weight'
                                        />
                                    </Col>
                                    {'x'}
                                    <Col sm='4'>
                                        <Field
                                            name='reps'
                                            className='form-control'
                                            placeholder='Reps'
                                        />
                                    </Col>
                                    <Col>
                                    <Button size='md' type='submit'>Add</Button>
                                    </Col>
                                    <Col>
                                    <Button size='md' type='submit'>Edit</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button type='submit' color='dark'>
                                Save
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};


export default ExerciseForm;