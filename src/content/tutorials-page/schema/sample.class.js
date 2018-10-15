
export class Sample {

    constructor(title, desc, url, isNew) {
        this.title = title;
        this.desc = desc;
        this.url = url;
        this.isNew = isNew !== undefined ? isNew : false;
    }

}
