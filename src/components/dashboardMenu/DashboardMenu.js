import { Link } from 'react-router-dom';
import { links } from './links';
import './dashboardMenu.scss';

export const DashboardMenu = () => {
    return (
        <div className = 'dashboardMenu'>
            {links.map((link, index) => {
                return (
                <p className = 'dashboardMenuItem' key={index}>
                    {link.icon}
                    <Link className = 'dashboardMenuItemLink' to = {link.path}> {link.text} </Link>
                </p>
                );
            })}
        </div>
    );
};