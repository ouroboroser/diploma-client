import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { DiagramHistory } from '../components/diagramHistory/DiagramHistory';

export const DiagramsHistory = () => {
    return (
        <>
            <div className = 'diagramsHistoryMenu'>
                <DashboardMenu />
            </div>
            <div className = 'diagramsHistory'>
                <div className = 'diagramsHistoryComponent'>
                    <div className='l'>
                        <DiagramHistory />
                    </div>
                </div>
            </div>
        </>
    );
};