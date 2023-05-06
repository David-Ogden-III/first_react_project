const ExerciseOptions = ({exercise}) => {
    const { name } = exercise;

    return (
        <option>{name}</option>
    );
};

export default ExerciseOptions;