import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Highcharts from 'highcharts';
import funnel from 'highcharts/modules/funnel';
import more from 'highcharts/highcharts-more';
import higstock from 'highcharts/highstock';
import { debounce } from '../../utils/utils';
import hcConfig from '../../config/highchartsConfig';

class CardHighcharts extends React.Component {
    constructor(props) {
        super(props);
        this.config = {
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            }]
        };

        this.chart = null;
    }

    componentWillMount() {
        console.log('component will mount');

        Highcharts.setOptions(hcConfig);
    }

    // When the DOM is ready, create the chart.
    componentDidMount() {

        console.log('component did mount');

        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        setTimeout(function(){


            this.chart = new Highcharts[this.props.type || 'Chart'](
                this.props.container,
                this.config
            );

        }.bind(this), 300);

        window.addEventListener('resize', debounce(function() {
            if(this.chart) {
                this.chart.reflow();
            }
        }.bind(this), 800));
    }

    componentWillUpdate() {

    }

    componentWillUnmount() {
        if(this.chart) {
            this.chart.destroy();
        }
    }

    render() {
        const style = {
            width: '95%',
            marginRight: '-40px'
        };

        return (
            <div id={this.props.container} style={style} ref="chart"></div>
        );
    }
}

CardHighcharts.propTypes = {
    chartType: PropTypes.oneOf(['area', 'arearange', 'areaspline',
        'areaslinerange', 'bar', 'boxplot', 'bubble', 'column',
        'columnrange', 'funnel', 'gauge', 'heatmap', 'line', 'pie', 'polygon',
        'spline', 'solidgauge']),
    container: PropTypes.string,
    options: PropTypes.object,
};

CardHighcharts.defaultProps = {
    chartType: 'line',
    container: 'chart',
    options: {}
};

export default CardHighcharts;
