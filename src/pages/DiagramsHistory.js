import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { DiagramHistory } from '../components/diagramHistory/DiagramHistory';

export const DiagramsHistory = () => {
    return (
        <div className = 'diagramsHistory'>
            <div className = 'diagramsHistoryMenu'>
                <DashboardMenu />
            </div>
            <div className = 'diagramsHistoryComponent'>
                <DiagramHistory />
            </div>
        </div>
    );
};