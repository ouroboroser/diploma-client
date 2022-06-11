import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { APIKeys } from '../components/apiKeys/APIKeys';

export const ListOfApiKeys = () => {
    return (
        <div className = 'listOfApiKeys'>
            <div className = 'listOfApiKeysMenu'>
                <DashboardMenu />
            </div>
            <div className = 'listOfApiKeysComponent'>
                <APIKeys />
            </div>
        </div>
    );
};