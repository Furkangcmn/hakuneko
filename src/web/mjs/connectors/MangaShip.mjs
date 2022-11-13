import Connector from '../engine/Connector.mjs';

export default class MangaShip extends Connector {
          
            constructor() {
                super();
                super.id = 'mangaship';
                super.label = 'Manga Ship';
                this.tags = [ 'manga', 'webtoon', 'turkish' ];
                this.url = 'https://mangaship.net';
                this.links = {
                    login: 'https://mangaship.net/member/login'
                };
            }
        
            _getMangaList( callback ) {
                callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
            }
            _getChapterList( manga, callback ) {
                callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
            }
            _getPageList( manga, chapter, callback ) {
                callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
            }
        }
