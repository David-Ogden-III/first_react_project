export const exerciseFormValidation = (values) => {
    const errors = {};

    // if (!values.lift) {
    //     errors.lift = 'Required';
    // } else if (values.lift === 'select') {
    //     errors.lift = 'Select an exercise';
    // }

    const reg = /^\d+$/;
    if (!values.weight) {
        errors.weight = 'Required';
    } else if (!reg.test(values.weight)) {
        errors.weight = 'Must only be numbers'
    }

    if (!values.reps) {
        errors.reps = 'Required';
    } else if (!reg.test(values.reps)) {
        errors.reps = 'Must only be numbers'
    }

    return errors;
};