import React, {PropTypes} from 'react';
import classnames from 'classnames';
import CardCompare from './CardCompare';
import CardHighcharts from './CardHighcharts';

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
            case 'compare':
                return (<CardCompare
                    value={props.data.value} comp={props.data.comp}/>
                );

                // const calc = (props.data.value - props.data.comp) / props.data.comp;
                // const diffPercentage = (calc * 100).toFixed(1) + '%';
                // console.log('DIFF: ', props.data.value, props.data.comp, diffPercentage);
                //
                // const diffClasses = (calc <= 0) ?
                //     classnames('Card-body-compare-diff', 'neg') :
                //     classnames('Card-body-compare-diff', 'pos');
                //
                // return (
                //     <section className="Card-body Card-body-compare">
                //         <div className="Card-body-compare-values">
                //             <span>{props.data.value}</span>
                //             <span>{props.data.comp}</span>
                //         </div>
                //         <div className={diffClasses}>
                //             {diffPercentage}
                //         </div>
                //     </section>);
                break;

            case 'chart':
                return (
                    <section className="Card-body Card-body-chart">
                        <CardHighcharts container="chart" options={{}}></CardHighcharts>
                    </section>
                );
                break;
            default:
                return (
                    <div className="Card-body">
                        INSERT DATA
                    </div>);
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
    title: PropTypes.string
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
