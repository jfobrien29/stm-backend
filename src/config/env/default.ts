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
        API_KEY: '',
        AUTH_DOMAIN: process.env.AUTH_DOMAIN || 'none',
        DATABASE_URL: process.env.DATABASE_URL || 'none',
        PROJECT_ID: process.env.PROJECT_ID || 'none',
        STORAGE_BUCKET: process.env.STORAGE_BUCKET || 'none',
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID || 'none',
        APP_ID: process.env.APP_ID || 'none',
        SERVICE_ACCOUNT: process.env.SERVICE_ACCOUNT || '',
    }
};

export { config as defaultConfig };
