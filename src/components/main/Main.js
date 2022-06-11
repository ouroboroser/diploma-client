import { Link } from 'react-router-dom';
import './main.scss';

export const Main = () => {
    return (
        <div className = 'mainPage'>
            <div className = 'mainPageText'>
                <p> Dashboard for developers </p>
                <p> Help you visualize Rx and improve your debugging process </p>
                <p id = 'getRxDashboard'> <Link to = '/signin' id = 'getRxDashboardLink'> Get dashboard for Rx </Link> </p>
            </div>
            <div className = 'mainPagePicture'>
                <img src={`${process.env.PUBLIC_URL}/img/main.gif`}
                    alt='rxicon' width={650}
                    />
            </div>
        </div>
    );
};