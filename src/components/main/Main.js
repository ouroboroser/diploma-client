import { Link } from 'react-router-dom';
import './main.scss';

export const Main = () => {
    const data = JSON.parse(localStorage.getItem('data'));

    return (
        <div className = 'mainPage'>
            <div className = 'mainPageText'>
                <p> Dashboard for developers </p>
                <p> Help you visualize Rx and improve your debugging process </p>
                { data ? <p> Welcome {data.username} ! </p> : '' }
                <p id = 'getRxDashboard'> {data ? <Link to = '/create-api-key' id = 'getRxDashboardLink'> Go to my dashboard for Rx </Link> : <Link to = '/signin' id = 'getRxDashboardLink'> Get dashboard for Rx </Link>} </p>
            </div>
            <div className = 'mainPagePicture'>
                <img src={`${process.env.PUBLIC_URL}/img/main.gif`}
                    alt='rxicon' width={650}
                    />
            </div>
        </div>
    );
};