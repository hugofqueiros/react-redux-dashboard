/**
 * Global Highcharts config
 * @type {{global: {useUTC: boolean}, credits: {enabled: boolean}, chart: {zoomType: string, reflow: boolean, style: {fontFamily: string, fontSize: string}, events: {redraw: hcConfig.chart.events.redraw}}, exporting: {enabled: boolean}, title: {text: null, style: {display: string}}, subtitle: {text: null}, legend: {enabled: boolean}, tooltip: {animation: boolean, borderRadius: number, borderWidth: number, useHTML: boolean, crosshairs: {width: number, color: string, dashStyle: string}}, plotOptions: {areaspline: {allowPointSelect: boolean, fillOpacity: number, enableMouseTracking: boolean}, line: {allowPointSelect: boolean, enableMouseTracking: boolean}}}}
 */
const hcConfig = {
    global: {
        useUTC: true
    },
    credits:    {
        enabled: false
    },
    chart: {
        zoomType: 'x',
        reflow: true,
        //height: 200,
        style: {
            fontFamily: '"Roboto Condensed, Lucida Grande", ' +
            '"Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            fontSize: '12px'
        },
        events: {
            // redraw: function (chart) {
            //     setTimeout(function () {
            //         chart.target.reflow();
            //     }, 100);
            // }
        }
    },
    exporting: {
        enabled: false
    },
    title: {
        text: null,
        style: {
            display: 'none'
        }
    },
    subtitle: {
        text: null
    },
    legend: {
        enabled: false
    },
    tooltip: {
        animation: true,
        borderRadius: 10,
        borderWidth: 2,
        useHTML: true,
        crosshairs:      {
            width:     1,
            color:     '#2A343C',
            dashStyle: 'ShortDash'
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    plotOptions: {
        areaspline: {
            allowPointSelect: true,
            fillOpacity: 0.5,
            enableMouseTracking: true
        },
        line: {
            allowPointSelect: true,
            enableMouseTracking: true
        }
    }
};

Object.freeze(hcConfig);

export default hcConfig;
