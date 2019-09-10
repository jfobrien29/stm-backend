import StmService from './StmService';
import { config } from '../config';
import { logger } from '../config/logger';

// NOTE: This class is used for validation and response protocol for various endpoints
class StmController {

    /********************************************
     * GET controllers
     ********************************************/

    public getLinkData = async (req, res) => {
        console.log('Finding new link');
        return res.status(200).send(await StmService.getSampleLinkResponse());
    }

    /********************************************
     * POST controllers
     ********************************************/
}

export default new StmController();
