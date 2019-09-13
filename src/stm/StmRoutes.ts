import { config } from '../config';
import StmController from './StmController';

export = (app) => {
    const endpoint = config.API_BASE;

    app.get(endpoint + 'link', StmController.getLinkData);
    app.post(endpoint + 'link', StmController.postNewLink);
};