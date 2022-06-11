import { Header } from '../components/header/Header';
import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { CreateApiKeyForm } from '../components/createApiKeyForm/CreateApiKeyForm';

export const CreateApiKey = () => {
    return (
        <div className = 'createApiKeyPage'>
            <div className = 'createApiKeyPageHeader'>
                <Header />
            </div>
            <div className = 'createApiKeyPageMainBlock'>
                <DashboardMenu />
                <CreateApiKeyForm />
            </div>
        </div>
    );
};