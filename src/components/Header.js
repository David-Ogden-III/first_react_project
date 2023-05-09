import { Navbar, NavbarBrand } from 'reactstrap';

export const Header = () => {
    return (
        <Navbar color='dark' dark>
            <NavbarBrand href='/'>
                Workout Tracker
            </NavbarBrand>
        </Navbar>
    );
};