import { Navbar, NavbarBrand } from 'reactstrap';
import ModalForm from './focusComps/ModalForm';

export const Header = () => {
    return (
        <Navbar color='dark' dark>
            <NavbarBrand href='/'>
                Workout Tracker
            </NavbarBrand>
            <ModalForm className='ms-auto' />
        </Navbar>
    );
};