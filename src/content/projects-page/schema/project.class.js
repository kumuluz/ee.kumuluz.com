export class Project {

    /**
     * Constructs new Project instance
     * @param {string} title Title of project
     * @param {string} content Short description of project
     * @param {string|Array} url If string it is displayed as url 'View on GitHub' otherwise it
     * accepts Array of objects <tt>{url: string, title: string}</tt>
     * @param {string|Array} [sampleUrl="#"] If string it is displayed as url 'View sample' otherwise it
     * accepts Array of objects <tt>{url: string, title: string}</tt>
     * @param {number} [size=1] Size of tile
     */
    constructor(title, content, url, sampleUrl = "#", size = 1) {
        this.title = title;
        this.content = content;
        this.url = url;
        this.size = size;
        this.sampleUrl = sampleUrl;
        this.npmUrl = "#";
    }

    /**
     * Adds NPM link to project
     * @param {string} npmUrl
     * @returns {Project}
     */
    onNPM(npmUrl) {
        this.npmUrl = npmUrl;
        return this;
    }

}
