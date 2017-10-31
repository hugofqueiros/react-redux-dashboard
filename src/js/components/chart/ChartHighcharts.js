import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import hcConfig from '../../config/highchartsConfig';
import {buildSeries, lineHighchartsOptions, pieHighchartsOptions} from '../../utils/chartUtils';

class ChartHighcharts extends React.Component {
    constructor(props) {
        super(props);

        console.log('TYOE: ', this.props.chartType);

        this.methods = {
            lineHighchartsOptions: lineHighchartsOptions,
            pieHighchartsOptions: pieHighchartsOptions
        };
        this.config = {};
    }

    componentWillMount() {

        let options = this.methods[this.props.chartType + 'HighchartsOptions'](this.props.chartType);

        switch (this.props.chartType) {
            case 'line':
                this.config = {
                    ...options,
                    series: [{
                        name: this.props.chartSeriesNames[0],
                        data: buildSeries(this.props.data.series)
                    }, {
                        name: this.props.chartSeriesNames[1],
                        data: buildSeries(this.props.dataComp.series)
                    }]
                };
                break;
            case 'pie':
                this.config = {
                    ...options,
                    series: [{
                        name: 'visits',
                        colorByPoint: true,
                        data: [{
                            name: this.props.chartSeriesNames[0],
                            y: this.props.data
                        }, {
                            name: this.props.chartSeriesNames[1],
                            y: this.props.dataComp,
                            sliced: true,
                            selected: true
                        }]
                    }]
                };
                break;
        }

        this.chart = null;
        Highcharts.setOptions(hcConfig);
    }

    // When the DOM is ready, create the chart.
    componentDidMount() {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        setTimeout(function(){
            //this.chart = new Highcharts[this.props.type || 'Chart'](
            this.chart = new Highcharts['Chart'](
                this.props.container,
                this.config
            );
        }.bind(this), 500);

        // window.addEventListener('resize', debounce(function() {
        //     if(this.chart) {
        //         this.chart.reflow();
        //     }
        // }.bind(this), 800));
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
            height: '100%',
            marginRight: '-40px'
        };

        return (
            <section id={this.props.container} style={style} ref="chart" />
        );
    }
}

ChartHighcharts.propTypes = {
    chartType: PropTypes.oneOf(['area', 'arearange', 'areaspline',
        'areaslinerange', 'bar', 'boxplot', 'bubble', 'column',
        'columnrange', 'funnel', 'gauge', 'heatmap', 'line', 'pie', 'polygon',
        'spline', 'solidgauge']).isRequired,
    container: PropTypes.string.isRequired,
    options: PropTypes.object,
    data: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]).isRequired,
    dataComp: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    type: PropTypes.string.isRequired,
    chartSeriesNames: PropTypes.array.isRequired
};

ChartHighcharts.defaultProps = {
    type: null,
    chartType: 'line',
    container: 'chart',
    options: {},
    data: {},
    dataComp: {},
    chartSeriesNames: []
};

export default ChartHighcharts;
