export class NavbarItem {
    url;
    title;
    external;

    constructor(url, title) {
        this.title = title;
        this.url = url;
        this.external = undefined;
    }
}
