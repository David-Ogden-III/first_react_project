import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap'
import { Formik, Field, Form } from 'formik';
import { selectAllFocusTitle } from './workoutFocus';

const ModalForm = ({ focus }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const focuses = selectAllFocusTitle();

    const ModalOptions = ({focus}) => {
        const { title } = focus;
    
        return (
            <option>{title}</option>
        );
    };

    const handleSubmit = (values) => {
        const focusData = {
            focus: values.focus,
            date: values.date,
        };
        console.log(focusData);
        setModalOpen(false)
    };

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
                            focus: '',
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
                                    {focuses.map((focus) => {
                                        return (
                                            <ModalOptions key={focus.id} focus={focus} />
                                        );
                                    })}
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Field
                                    name='date'
                                    className='form-control'
                                    placeholder='Select date'
                                />
                            </FormGroup>
                            <Button type='submit' color='dark'>
                                Cre
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ModalForm;