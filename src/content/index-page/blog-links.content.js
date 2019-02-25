import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("Announcing KumuluzEE 3.1.0!", "https://blog.kumuluz.com/product/announcement/developers/2019/01/28/kumuluzee-3.1.0-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE JWT Auth 1.1.1 released", "https://blog.kumuluz.com/product/announcement/developers/2019/01/29/kumuluzee-jwt-auth-1.1.1-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE Health 1.0.2 released", "https://blog.kumuluz.com/product/developers/2019/01/31/kumuluzee-health-release-1.0.2", ["product", "developers"])
];
