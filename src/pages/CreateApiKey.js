import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { CreateApiKeyForm } from '../components/createApiKeyForm/CreateApiKeyForm';

export const CreateApiKey = () => {
    return (
        <div className = 'createApiKeyPage'>
            <DashboardMenu />
            <CreateApiKeyForm />
        </div>
    );
};