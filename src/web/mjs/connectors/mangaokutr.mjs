import Connector from '../engine/Connector.mjs';

export default class mangaokutr extends Connector {

    constructor() {
        super();
        super.id = 'mangaokutr';
        super.label = 'Manga Oku TR';
        this.tags = [ 'manga', 'webtoon', 'turkish' ];
        this.url = 'https://mangaokutr.com';
    }
      async _getMangas() {
        throw new Error('Not implemented!');
    }

    async _getChapters(manga) {
        throw new Error('Not implemented!');
    }

    async _getPages(chapter) {
        throw new Error('Not implemented!');
    }
}
