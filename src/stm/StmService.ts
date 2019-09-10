export class StmService {
    /**************************************************************
     * Query Services
     *************************************************************/

    async getSampleLinkResponse(): Promise<any> {
        return Promise.resolve('TEST LINK');
    }
}

export default new StmService();
