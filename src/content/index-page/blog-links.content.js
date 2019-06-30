import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("Support for MicroProfile 2.2 and Java 12 is here", "https://blog.kumuluz.com/product/announcement/developers/2019/06/29/kumuluzee-3.5.0-release", "product,announcement,developers"),
    new BlogLink("Announcing KumuluzEE Fault Tolerance 2.0.0", "https://blog.kumuluz.com/product/developers/2019/06/11/kumuluzee-fault-tolerance-2.0.0-release", "product,developers"),
    new BlogLink("Kumuluz is celebrating 5 years! What we’ve done and the roadmap ahead", "https://blog.kumuluz.com/announcement/community/news/product/2019/03/10/kumuluz-5-years", "announcement,community,news,product")
];
