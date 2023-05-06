import { Input, FormGroup, Form } from 'reactstrap';
import ModalOptions from './ModalOptions';
import { selectAllFocusTitle } from './workoutFocus';

const ModalForm = ({focus}) => {
    const focuses = selectAllFocusTitle();
    
    return (

        <Form>
            <FormGroup>
                <Input
                    id='workoutSelector'
                    type='select'>
                    {focuses.map((focus) => {
                        return (
                            <ModalOptions key={focus.id} focus={focus}/>
                        );
                    })}
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