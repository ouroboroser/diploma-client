import { DashboardMenu } from '../components/dashboardMenu/DashboardMenu';
import { Marbles } from '../components/marbles/marbles';
import './styles.scss';

export const Diagram = () => {
    return (
        <div className = 'diagramPage'>
            <DashboardMenu />
            <Marbles />
        </div>
    );
};