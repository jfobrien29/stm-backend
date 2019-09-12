import StmService from './StmService';
import { LinkData } from '../models/link';
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

    public postNewLink = async (req, res) => {
        console.log('Posting link');
        const linkData: LinkData = req.body;
        return res.status(200).send(await StmService.postLink(linkData));
    }
}

export default new StmController();
