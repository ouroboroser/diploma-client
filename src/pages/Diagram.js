import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { CurrentDiagram } from '../components/currentDiagram/currentDiagram';
import './styles.scss';

export const Diagram = () => {
    return (
        <div className = 'fullMarblesDiagram'>
            <div className = 'fullMarblesDiagramMenu'>
                <DashboardMenu />
            </div>
            <div className = 'fullMarblesDiagramComponent'>
                <CurrentDiagram />
            </div>
        </div>
    );
};