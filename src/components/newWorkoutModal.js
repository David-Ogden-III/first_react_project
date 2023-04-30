import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewWorkoutModal = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                New
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Choose your focus</ModalHeader>
                <ModalBody>
                    Insert Form Here <br />
                    Focus: Legs <br />
                    Date: 04/29/23
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Add
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default NewWorkoutModal;