const config = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'superSecret',
    API_BASE: process.env.API_BASE || '/',
    LOGGER: {
        LEVEL: process.env.LOG_LEVEL || 'debug',
        SILENT: process.env.LOG_SILENT || false
    },
    FIREBASE: {
        SERVICE_ACCOUNT: process.env.SERVICE_ACCOUNT || '',
    }
};

export { config as defaultConfig };
