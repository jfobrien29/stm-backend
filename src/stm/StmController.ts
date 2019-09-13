import StmService from './StmService';
import { LinkData } from '../models/link';
import { config } from '../config';

// NOTE: This class is used for validation and response protocol for various endpoints
class StmController {

    /********************************************
     * GET controllers
     ********************************************/

    public getLinkData = async (req, res) => {
        console.log('Finding new link');
        try {
            const response = await StmService.getSampleLinkResponse();
            return res.status(200).send(response);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    /********************************************
     * POST controllers
     ********************************************/

    public postNewLink = async (req, res) => {
        console.log('Posting link');
        try {
            const linkData: LinkData = req.body;
            const response = await StmService.postLink(linkData)
            return res.status(201).send(response);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

export default new StmController();
