import { Navbar, NavbarBrand } from 'reactstrap';
import ModalForm from './focusComps/ModalForm';

export const Header = ({onSubmit}) => {
    return (
        <Navbar color='dark' dark>
            <NavbarBrand href='/'>
                Workout Tracker
            </NavbarBrand>
            <ModalForm onSubmit={onSubmit} />
        </Navbar>
    );
};