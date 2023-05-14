import { Navbar, NavbarBrand, Col } from 'reactstrap';
import ModalForm from './focusComps/ModalForm';

export const Header = ({ onSubmit }) => {
    return (
        <Navbar color='dark' dark >
                <Col sm='3'></Col>
                <Col sm='6'className='text-center'>
                    <NavbarBrand href='/'>
                        Workout Tracker
                    </NavbarBrand>
                </Col>
                <Col sm='3'>
                    <ModalForm onSubmit={onSubmit} />
                </Col>
        </Navbar>
    );
};