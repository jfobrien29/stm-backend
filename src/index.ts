import { config } from './config';
import { logger } from './config/logger';
import { app } from './app';

const port = config.PORT;

app.listen(port, err => {
    if (err) {
        console.error(err);
    }
    return console.info(`Server is listening on ${port} in ${config.ENV} environment`);
});