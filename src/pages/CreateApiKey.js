import { Header } from '../components/header/Header';
import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { CreateApiKeyForm } from '../components/createApiKeyForm/CreateApiKeyForm';

export const CreateApiKey = () => {
    return (
    // <div className = 'createApiKeyPageMainBlock'>
    //     <DashboardMenu />
    //     <CreateApiKeyForm />
    // </div>
    <div className = 'createApiKey'>
            <div className = 'createApiKeyMenu'>
                <DashboardMenu />
            </div>
            <div className = 'createApiKeyComponent'>
            <CreateApiKeyForm />
            </div>
        </div>
    );
};