import {NavbarItem} from "./navbar-item.abstract";

export class ExternalLink extends NavbarItem {

    constructor(url, title) {
        super(url, title);
        this.external = true;
    }
}
