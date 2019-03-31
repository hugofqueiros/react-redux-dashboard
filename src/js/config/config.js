import { isDeviceMobile } from '../utils/utils';

const checkEnv = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return 'http://localhost';
        case 'staging':
            return 'ssswhatever';
        case 'production':
            return 'https://dry-escarpment-15846.herokuapp.com'; // 'http://api.hugofqueiros.com';
        default:
            return 'http://localhost';
    }
};

const checkEnvPort = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return ':4040';
        case 'staging':
            return ':4040';
        case 'production':
            return '';
        default:
            return ':4045';
    }
};

const app = {
    appName: 'React Redux Dashboard',
    isMobileDevice: isDeviceMobile(),
    sidebarItems: [
        {
            icon: 'home',
            name: 'Home',
            link: '/'
        }, {
            icon: 'car',
            name: 'Overview',
            link: '/overview'
        }, {
            icon: 'heart',
            name: 'Visits',
            link: '/visits'
        }
        // , {
        //     icon: 'line-chart',
        //     name: 'Charts',
        //     link: '/charts'
        // }, {
        //     icon: 'map',
        //     name: 'Maps',
        //     link: '/maps'
        // }
    ],
    api: {
        host: checkEnv(),
        port: checkEnvPort(),
        root: '/api',
        endPoint: checkEnv() + checkEnvPort() + '/api',
        githubApi: 'https://api.github.com/users/hugofqueiros'
    },
    sentry: {
        endpoint: 'https://50c307f08ffa48e4b3f5ce435b3b09eb@sentry.io/67931'
    }
};

console.warn('PROCESS ENV: ', process.env.NODE_ENV, checkEnv());


Object.freeze(app);

export default app;
