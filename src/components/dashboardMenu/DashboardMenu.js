import { Link } from 'react-router-dom';
import { BsPlusSquareDotted, BsList } from 'react-icons/bs';
import './dashboardMenu.scss';

export const DashboardMenu = () => {
    return (
        <div className = 'dashboardMenu'>
            <p className = 'dashboardMenuItem'>
                <BsPlusSquareDotted size={20} />
                <Link className = 'dashboardMenuItemLink' to = '/create-api-key'> Create API Key </Link>
            </p>
            <p className = 'dashboardMenuItem'>
                <BsList size={20} />
                <Link className = 'dashboardMenuItemLink' to = '/api-keys'> List of API Keys </Link>
            </p>
        </div>
    );
};