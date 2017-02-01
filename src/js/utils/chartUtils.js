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



export {buildSeries};
