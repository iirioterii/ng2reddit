/**
 * Created by reva on 06.01.17.
 */
export class Article {
    votes: number;
    title: string;
    description: string;
    link: string;

    constructor(title: string, link: string, description: string, votes?: number) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp():void {
        this.article.votes +=1;
    }

    voteDown():void {
        if(this.article.votes > 0) {
            this.article.votes -=1;
        }
    }
}
