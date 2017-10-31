import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardCompare from './CardCompare';
import ChartHighcharts from '../chart/ChartHighcharts';
import CardGithub from './CardGithub';
import CardMedium from './CardMedium';
import CardRealTime from './CardRealTime';

import './Card.scss';

const Card = (props) => {
    const header = () => {
        if (props.hasHeader) {
            const iconClasses = classnames('Card-header-icon', 'fa fa-' + props.icon);

            return (
                <header className="Card-header">
                    <i className={iconClasses} />
                    <div className="Card-header-title">{props.title}</div>
                </header>);
        }
        return null;
    };

    const footer = () => {
        if (props.hasFooter) {
            return (<footer className="Card-footer">wowowoow foooooottterrr</footer>)
        }
        return null;
    };

    const body = () => {
        switch (props.type) {
            case 'github':
                return (
                    <CardGithub {...props.data} />
                );
            case 'medium':
                return (
                    <CardMedium {...props.data} />
                );
            case 'compare':
                return (<CardCompare
                    value={props.data} comp={props.dataComp}/>
                );
            case 'realtime':
                return (
                    <CardRealTime />
                );
            case 'highcharts':
                return (
                    <section className="Card-body Card-body-chart">
                        <ChartHighcharts
                            {...props}
                        />
                    </section>
                );
            default:
                return (
                    <section className="Card-body">
                        INSERT DATA
                    </section>);
        }
    };

    return (
        <div className={props.classes}>
            <div className="Card" elevation="1">
                {header()}
                {body()}
                {footer()}
            </div>
        </div>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf(['github', 'medium', 'compare',
        'highcharts', 'realtime']).isRequired,
    chartType: PropTypes.string,
    hasHeader: PropTypes.bool,
    hasFooter: PropTypes.bool,
    icon: PropTypes.string,
    classes: PropTypes.string,
    title: PropTypes.string,
    chartSeriesNames: PropTypes.array,
    container: PropTypes.string,
    data: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    dataComp: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ])
};

Card.defaultProps = {
    hasHeader: true,
    hasFooter: false,
    icon: 'street-view',
    type: '',
    chartSeriesNames: [],
    container: null,
    chartType: '',
    classes: '',
    title: ''
};

export default Card;
