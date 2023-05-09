import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap'
import { Formik, Field, Form } from 'formik';

function ModalForm({ onSubmit }) {
    const [modalOpen, setModalOpen] = useState(false);;

    const handleSubmit = (values) => {
        const newTitle = {
            focus: values.focus,
            date: values.date
        }
        onSubmit(newTitle);
        setModalOpen(false)
        console.log(newTitle)
    }

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                Create New Workout
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Select your focus and date
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            focus: 'Push',
                            date: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Field
                                    name='focus'
                                    as='select'
                                    className='form-control'
                                >
                                    <option value='Push'>Push</option>
                                    <option value='Pull'>Pull</option>
                                    <option value='Legs'>Legs</option>
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Field
                                    name='date'
                                    className='form-control'
                                    type='date'
                                />
                            </FormGroup>
                            <Button type='submit' color='dark'>
                                Create
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ModalForm;