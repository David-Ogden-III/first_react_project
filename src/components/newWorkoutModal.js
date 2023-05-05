import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalForm from './ModalForm';

const NewWorkoutModal = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="secondary" size='sm' onClick={toggle}>
                Add New Workout
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Choose your focus</ModalHeader>
                <ModalBody>
                    <ModalForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type='submit' value='Submit' onClick={toggle}>
                        Create
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default NewWorkoutModal;