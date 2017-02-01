import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Highcharts from 'highcharts';
import funnel from 'highcharts/modules/funnel';
import more from 'highcharts/highcharts-more';
import higstock from 'highcharts/highstock';
import { debounce } from '../../utils/utils';
import hcConfig from '../../config/highchartsConfig';
import {buildSeries} from '../../utils/chartUtils';

class CardHighcharts extends React.Component {
    constructor(props) {
        super(props);

        const series = buildSeries(props.data.series);
        this.config = {
            chart: {
                type: 'line'
            },
            colors: ['#599913', '#991359', '#135999'],
            legend: {
                enabled: true
            },
            tooltip: {
                shared: true,
                borderColor: '#000000',
                // formatter: function () {
                //     const data = {
                //         points: this.points,
                //         date: moment(this.x).format('MMMM YY')
                //     };
                //     return chartTooltipShared(data);
                // }
            },
            xAxis: {
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                type: 'datetime',
                showFirstLabel: false,
                tickInterval: 30.41667 * 24 * 3600 * 1000,
                title: {
                    text: null
                },
                lineColor: '#E4ECF2',
                tickColor: '#E4ECF2',
                labels: {
                    style: {
                        fontSize: '10px'
                    }
                },
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H h',//:%M',
                    day: '%a %e',
                    week: '%e %b.',
                    month: '%b \'%y',
                    year: '%Y'
                }
            },
            yAxis: {
                min: 0,
                gridLineColor: '#E4ECF2',
                gridLineWidth: 1,
                title: {
                    text: null
                },
                labels: {
                    enabled: true,
                    // formatter: function() {
                    //     var value = null;
                    //     if (numberType === 'percentage') {
                    //         value = Intl.percentage(this.value);
                    //     } else if (numberType === 'currency') {
                    //         value = Intl.currency(this.value);
                    //     } else {
                    //         value = Intl.number(this.value);
                    //     }
                    //
                    //     return value;
                    // }
                }
            },
            // series: [{
            //     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            // }]
            series: [{
                name: 'visits',
                data: series
            }, {
                name: 'visits compare',
                data: buildSeries(props.dataComp.series)
            }]


        };

        this.chart = null;
    }

    componentWillMount() {
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
            this.chart = new Highcharts[this.props.type || 'Chart'](
                this.props.container,
                this.config
            );
        }.bind(this), 300);

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
            marginRight: '-40px'
        };

        return (
            <section id={this.props.container} style={style} ref="chart"></section>
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
    data: PropTypes.object,
    dataComp: PropTypes.object
};

CardHighcharts.defaultProps = {
    chartType: 'line',
    container: 'chart',
    options: {},
    data: {},
    dataComp: {}
};

export default CardHighcharts;
