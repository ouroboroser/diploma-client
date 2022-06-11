import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { Marbles } from '../components/marbles/marbles';
import './styles.scss';

export const Diagram = () => {
    return (
        <div className = 'fullMarblesDiagram'>
            <div className = 'fullMarblesDiagramMenu'>
                <DashboardMenu />
            </div>
            <div className = 'fullMarblesDiagramComponent'>
                <Marbles />
            </div>
        </div>
    );
};