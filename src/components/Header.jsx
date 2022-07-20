import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header-nav'>
            <nav className='purple lighten-1'>
                <div className='nav-wrapper'>
                    <NavLink to='/' className='brand-logo'>
                        React Shop
                    </NavLink>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <NavLink to='/about'>About us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export { Header };
