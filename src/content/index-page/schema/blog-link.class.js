
export class BlogLink {

    constructor(title, link, tags) {
        if (tags.constructor === String) {
            this.tags = tags.split(",");
        } else if (tags.constructor === Array) {
            this.tags = tags;
        } else {
            throw new TypeError("tags must be comma separated string or array of strings!");
        }
        this.title = title;
        this.link = link;
    }

}
