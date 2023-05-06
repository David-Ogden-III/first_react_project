import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Row, Col } from 'reactstrap'
import { Formik, Field, Form } from 'formik';
import ExerciseOptions from './ExerciseOptions';
import { selectAllExerciseName } from './workouts';

const ExerciseForm = ({ exercise }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const exercises = selectAllExerciseName();

    const handleSubmit = (values) => {
        const exerciseData = {
            lift: values.lift,
            weight: values.weight,
            reps: values.reps
        };
        console.log(exerciseData);
        setModalOpen(false)
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                Add New Workout
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Modal Header
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            lift: '',
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
                                    {exercises.map((exercise) => {
                                        return (
                                            <ExerciseOptions key={exercise.id} exercise={exercise}/>
                                        );
                                    })}
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