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

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        if (this.votes > 0) {
            this.votes -= 1;
        }
    }

    domain(): string {
        try {
            console.log(this.link);
            if (this.link) {
                const link: string = this.link.split('//')[1];
                return link.split('/')[0];
            }
            return 'No domain'
        }
        catch (err) {
            return null;
        }
    }
}
