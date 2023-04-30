const ModalOptions = ({focus}) => {
    const { title } = focus;

    return (
        <option>{title}</option>
    );
};

export default ModalOptions;