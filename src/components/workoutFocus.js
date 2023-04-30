const workoutFocus = [
    {
        id: 0,
        title: "Push"
    },
    {
        id: 1,
        title: "Pull"
    },
    {
        id: 2,
        title: "Legs"
    }
];

export const SelectFocusByTitle = (title) => {
    return workoutFocus.find((focus) => focus.title);
};

export default workoutFocus;