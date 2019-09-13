import { LinkData } from '../models/link';
import * as admin from 'firebase-admin';
import * as constants from '../config/constants';

export class StmService {
    /**************************************************************
     * Query Services
     *************************************************************/
    db = admin.firestore();

    async getSampleLinkResponse(): Promise<any> {

        const linksRef = this.db.collection('links');
        const snapshot = await linksRef.get();
        const links = [];
        snapshot.forEach(doc => {
            const link = doc.data().link;
            links.push(link);
        });

        return Promise.resolve(this.getRandomLink(links));
    }

    /**************************************************************
     * Post Services
     *************************************************************/

    async postLink(linkData: LinkData): Promise<any> {
        console.log(`Saving link for ${linkData.link}`);

        const setDoc = await this.db.collection(constants.LNKS_FIRESTORE_REF).doc().set(linkData);
        return Promise.resolve(setDoc);
    }

    /**************************************************************
     * Helper Functions
     *************************************************************/

    private getRandomLink(links: string[]): string {
        return links[Math.floor(Math.random() * links.length)];
    }
}

export default new StmService();
