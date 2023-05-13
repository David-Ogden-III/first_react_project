const AddExercise = ({ exerciseList }) => {

    return (
        <div>
            {
                exerciseList.map(exercise =>
                    <p key={exercise.id}>{exercise.lift}<br />{exercise.weight}x{exercise.reps}</p>
                )
            }
        </div>
    )
};

export default AddExercise;