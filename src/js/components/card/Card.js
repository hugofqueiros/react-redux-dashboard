import React, {PropTypes} from 'react';
import classnames from 'classnames';
import CardCompare from './CardCompare';
import CardHighcharts from './CardHighcharts';
import CardGithub from './CardGithub';
import CardMedium from './CardMedium';

import './Card.scss';

const Card = (props) => {
    const header = () => {
        if (props.hasHeader) {
            const iconClasses = classnames('Card-header-icon', 'fa fa-' + props.icon);

            return (
                <header className="Card-header">
                    <i className={iconClasses}></i>
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
                break;
            case 'medium':
                return (
                    <CardMedium {...props.data} />
                );
            case 'compare':
                return (<CardCompare
                    value={props.data} comp={props.dataComp}/>
                );
                break;
            case 'chart':
                return (
                    <section className="Card-body Card-body-chart">
                        <CardHighcharts
                            container="chart" options={{}}
                            data={props.data}
                            dataComp={props.dataComp}
                        ></CardHighcharts>
                    </section>
                );
                break;
            default:
                return (
                    <section className="Card-body">
                        INSERT DATA
                    </section>);
                break;
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
    type: PropTypes.string.isRequired,
    hasHeader: PropTypes.bool,
    hasFooter: PropTypes.bool,
    icon: PropTypes.string,
    classes: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.object
    ]),
    dataComp: PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.object
    ])
};

Card.defaultProps = {
    hasHeader: true,
    hasFooter: false,
    icon: 'street-view',
    type: '',
    classes: '',
    title: ''
};

export default Card;
