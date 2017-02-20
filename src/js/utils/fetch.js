import axios from 'axios';

const requests = (method, url, config) => {
    console.log('config', config);

    if (method === ('get' || 'post' || 'put' || 'del')) {
        return (axios({
            method: method,
            url: url
        }))
    } else {
        console.error('Method does not exist: ', method);
        throw new Error('Method does not exist');
    }
};

// const requests = {
//     get: (method, url, config) => {
//         axios({
//             method: method,
//             url: url
//         })
//     },
//     put: (method, url, config) => {
//
//     },
//     post: (method, url, config) => {
//
//     },
//     del: (method, url, config) => {
//
//     }
// }

export { requests };
