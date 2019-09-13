import { LinkData } from '../models/link';
import * as admin from 'firebase-admin';

export class StmService {
    /**************************************************************
     * Query Services
     *************************************************************/

    async getSampleLinkResponse(): Promise<any> {
        const db = admin.firestore();

        const linksRef = db.collection('links');
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
        return Promise.resolve();
    }

    private getRandomLink(links: string[]): string {
        return links[Math.floor(Math.random() * links.length)];
    }
}

export default new StmService();
