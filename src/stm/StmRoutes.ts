import { config } from '../config';
import StmController from './StmController';

export = (app) => {
    const endpoint = config.API_BASE;

    app.get(endpoint, StmController.getLinkData);
    app.post(endpoint + 'postLink', StmController.postNewLink);
};