import './tooltipText.scss';

export const TooltipText = props => {

    return (
        <div>
            <div className = 'tooltiptext'>
                {props.element.operation === 'of_created' ? <p> start: true </p> : <p></p> }
                {props.element.operation === 'of_created' ? <p> data set: [{String(props.element.args)}] </p> : <p></p> }

                {props.element.operation === 'range_created' ? <p> start: true </p> : <p></p> }
                {props.element.operation === 'range_created' ? <p> range values: [{props.element.args[0]}, {props.element.args[1]}]</p> : <p></p> }

                {props.element.operation === 'filter_input' ? <p> function type: filter <br/> function: {props.element.filter} <br/> value: {props.element.arg} <br/> passed: {props.filter === true ? 'true' : 'false' } </p> : <p></p> }
                {props.element.operation === 'map_input' ? <p> function type: map <br/> function: {props.element.map} <br/> value: {props.element.arg} <br/> result: {props.map} </p> : <p></p> }

                {props.element.operation === 'from_fetch_url' ? <p> function type: fetch <br/> function: http request <br/> url: {props.element.args} <br/> </p> : <p></p> }
            </div>
        </div>
    );
};