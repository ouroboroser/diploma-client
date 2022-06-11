import { Link } from 'react-router-dom';
import { BsPlusSquareDotted, BsList, BsDiagram3 } from 'react-icons/bs';
import { BiGitCommit } from 'react-icons/bi';
import './dashboardMenu.scss';

export const DashboardMenu = () => {
    return (
        <div className = 'dashboardMenu'>
            <p className = 'dashboardMenuItem' key={1}>
                <BsPlusSquareDotted size={20} />
                <Link className = 'dashboardMenuItemLink' to = '/create-api-key'> Create API Key </Link>
            </p>
            <p className = 'dashboardMenuItem' key={2}>
                <BsList size={20} />
                <Link className = 'dashboardMenuItemLink' to = '/api-keys'> List of API Keys </Link>
            </p>
            <p className = 'dashboardMenuItem' key={3}>
                {/* <BsDiagram3 size={20} /> */}
                <BiGitCommit size={20} />
                <Link className = 'dashboardMenuItemLink' to = '/diagram'> Look diagram </Link>
            </p>
        </div>
    );
};