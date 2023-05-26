import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ExerciseForm from './ExerciseForm';
import AddExercise from './AddExercise';

function ExerciseModal({ onSubmit, exerciseList, workoutList, cardId, deleteExercise, editExercise }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                View<br />Workout
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    {workoutList.focus}<br />{workoutList.date}
                </ModalHeader>
                <ModalBody>
                    <ExerciseForm onSubmit={onSubmit} cardId={cardId} />
                    <AddExercise exerciseList={exerciseList} cardId={cardId} onSubmit={onSubmit} deleteExercise={deleteExercise} editExercise={editExercise} />
                </ModalBody>
            </Modal>
        </>
    );
}
export default ExerciseModal;