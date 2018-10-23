export {NavbarItem} from "./schema/navbar-item.abstract";
import {InternalLink} from "./schema/internal-link.class";
import {ExternalLink} from "./schema/external-link.class";
import {BLOG_URL, GITHUB_URL, MICROPROFILE_URL} from "../constants.content";


export const navbarItems = [
    new InternalLink("/generator", "Generator"),
    new InternalLink("/projects", "Projects"),
    new InternalLink("/microprofile", "Microprofile"),
    new InternalLink("/tutorials", "Tutorials"),
    new InternalLink("/articles", "Articles"),
    new InternalLink("/opinions", "Opinions"),
    new InternalLink("/support", "Support"),
    new ExternalLink(BLOG_URL, "Blog")
];

export const githubItem = new ExternalLink(GITHUB_URL, "Github");

export const microprofileItem = new ExternalLink(MICROPROFILE_URL, "Microprofile");

