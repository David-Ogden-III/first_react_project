import { Input, FormGroup, Form } from 'reactstrap';
//import { selectFocusByTitle } from './workoutFocus';

const ModalForm = () => {
    
    return (

        <Form>
            <FormGroup>
                <Input
                    id='workoutSelector'
                    type='select'>
                    <option></option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Input
                    type='date'
                    id='workoutDate'>
                </Input>
            </FormGroup>
        </Form>
    );
};

export default ModalForm;