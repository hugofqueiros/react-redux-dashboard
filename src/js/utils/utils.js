import config from '../config/config';

const isDeviceMobile = () => {
    const isMobile = {
        android: function() {
            return navigator.userAgent.match(/Android/i) &&
                navigator.userAgent.match(/mobile|Mobile/i);
        },
        blackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i) ||
                navigator.userAgent.match(/BB10; Touch/);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPod/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i) ||
                navigator.userAgent.match(/webOS/i);
        },
        any: function() {
            return (isMobile.android() || isMobile.blackBerry() ||
            isMobile.iOS() || isMobile.opera() || isMobile.windows());
        }
    };

    return isMobile.any();
};

const isTouchDevice = () => {
    // return !!(typeof window !== 'undefined' && 'ontouchstart' in window) ||
    //     !!(typeof navigator !== 'undefined' && navigator.maxTouchPoints);

    return (typeof window !== 'undefined' && 'ontouchstart' in window) ||
        !!(typeof navigator !== 'undefined' && navigator.maxTouchPoints);
};

const debounce = (func, wait, immediate) => {
    let timeout;
    return () => {
        const args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(this, args);
            }
        }.bind(this);
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
};

// const getApiEndPoint = () => {
//     switch (process.env.NODE_ENV) {
//         case 'production':
//             return config.api.host + config.api.root;
//             break;
//         default:
//             return config.api.host + ':' + config.api.port + config.api.root;
//             break;
//     }
// };


export { isDeviceMobile, isTouchDevice, debounce };
