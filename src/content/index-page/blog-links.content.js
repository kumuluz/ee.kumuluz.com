import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("Support for MicroProfile 3.2 is here!", "https://blog.kumuluz.com/product/announcement/developers/2020/02/05/kumuluzee-3.7.0-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE JCache 1.0.0 released ", "https://blog.kumuluz.com/product/announcement/developers/2020/01/29/kumuluzee-jcache-release-1.0.0", "product,announcement,developers"),
    new BlogLink("Kumuluz is celebrating 5 years! What we’ve done and the roadmap ahead", "https://blog.kumuluz.com/announcement/community/news/product/2019/03/10/kumuluz-5-years", "announcement,community,news,product")
];
