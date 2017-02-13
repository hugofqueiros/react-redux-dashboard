import { isDeviceMobile } from '../utils/utils';

console.log('PROCESS ENV: ', process.env.NODE_ENV);

const checkEnv = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return 'localhost';
            break;
        case 'staging':
            return 'ssswhatever';
            break;
        case 'production':
            return 'whatever';
            break;
        default:
            return 'localhost';
            break;
    }
};

const checkEnvPort = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return '4040';
            break;
        case 'staging':
            return '4040';
            break;
        case 'production':
            return '8083';
            break;
        default:
            return '4040';
            break;
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
        }, {
            icon: 'line-chart',
            name: 'Charts',
            link: '/charts'
        }, {
            icon: 'map',
            name: 'Maps',
            link: '/maps'
        }
    ],
    api: {
        host: checkEnv(),
        port: checkEnvPort(),
        root: '/api',
        githubApi: 'https://api.github.com/users/hugofqueiros'
    },
    sentry: {
        endpoint: 'https://50c307f08ffa48e4b3f5ce435b3b09eb@sentry.io/67931'
    }
};



Object.freeze(app);

export default app;
