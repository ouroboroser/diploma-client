import { Link } from 'react-router-dom';
import { BsGraphUp } from 'react-icons/bs';
import './header.scss';

export const Header = () => {
    return(
        <div>
            <header className = 'header'>
                <div className = 'icon'>
                    {/* <BsGraphUp size={35}/> */}
                    {/* <img src={`${process.env.PUBLIC_URL}/img/rxicon.png`}
                         alt='rxicon'
                         className='rxIcon'/> */}
                    <p> RxHelper </p>
                    <BsGraphUp size={33}/>
                </div>
                <div className = 'menu'>
                    <Link to="/about" className = 'menuLinkText'> About </Link>
                    <Link to="/docs" className = 'menuLinkText'> Docs </Link>
                    <Link to="/signin" className = 'menuLinkText'> Sign in </Link>
                </div>
            </header>
        </div>
    );
};