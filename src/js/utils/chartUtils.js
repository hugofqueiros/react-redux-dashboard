import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';

import m from 'moment';

const buildSeries = (seq) => {
    if(isEmpty(seq)) {
        return seq;
    }

    let resultSeq = [];
    seq.forEach(function(obj) {
         const point = [m(obj[0]).utc().startOf('month').valueOf(), obj[1]];
         resultSeq.push(point);
    });
    resultSeq = sortBy(resultSeq, (obj) => {
        return obj[0];
    });

    return resultSeq;
};

// const buildPieSeries = (data) => {
//
// };

const pieHighchartsOptions = (chartType) => {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: chartType
        },
        colors: ['#599913', '#014883', '#135999'],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
    }
};

const lineHighchartsOptions = (chartType) => {
    const config = {
        chart: {
            type: chartType
        },
        colors: ['#599913', '#014883', '#135999'],
        legend: {
            enabled: true
        },
        tooltip: {
            shared: true,
            borderColor: '#000000'
        },
        xAxis: {
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
                enabled: true
            }
        }
    };

    return config;
};

export {buildSeries, lineHighchartsOptions, pieHighchartsOptions};
