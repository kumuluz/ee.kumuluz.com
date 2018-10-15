import {NavbarItem} from "./navbar-item.abstract";

export class InternalLink extends NavbarItem {

    constructor(url, title) {
        super(url, title);
        this.external = false;
    }
}
