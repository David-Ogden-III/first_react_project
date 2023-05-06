import { Navbar, NavbarBrand } from 'reactstrap';
import NewWorkoutModal from './focusComps/newWorkoutModal';

export const Header = () => {
    return (
        <Navbar color='dark' dark>
            <NavbarBrand href='/'>
                Workout Tracker
            </NavbarBrand>
            <NewWorkoutModal className='ms-auto' />
        </Navbar>
    );
};