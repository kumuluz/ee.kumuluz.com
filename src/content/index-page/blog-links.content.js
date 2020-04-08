import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("Introducing KumuluzEE 3.9.0 with MicroProfile 3.3", "https://blog.kumuluz.com/product/announcement/developers/2020/04/08/kumuluzee-3.9.0-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE Logs 1.4.0 released", "https://blog.kumuluz.com/product/developers/2020/03/31/kumuluzee-logs-release-1.4.0", "product,announcement,developers"),
    new BlogLink("Kumuluz is celebrating 5 years! What we’ve done and the roadmap ahead", "https://blog.kumuluz.com/announcement/community/news/product/2019/03/10/kumuluz-5-years", "announcement,community,news,product")
];
