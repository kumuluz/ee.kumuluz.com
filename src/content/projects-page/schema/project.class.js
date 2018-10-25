export class Project {

    constructor(title, content, url, sampleUrl = "#", size = 1) {
        this.title = title;
        this.content = content;
        this.url = url;
        this.size = size;
        this.sampleUrl = sampleUrl;
        this.npmUrl = "#";
    }

    onNPM(npmUrl) {
        this.npmUrl = npmUrl;
        return this;
    }

}
