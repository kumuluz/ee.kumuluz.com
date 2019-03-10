import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("KumuluzEE 3.2.0 brings MicroProfile 2.1 compliancy", "https://blog.kumuluz.com/product/announcement/developers/2019/02/28/kumuluzee-3.2.0-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE JWT Auth 1.1.1 released", "https://blog.kumuluz.com/announcement/community/news/product/2019/03/10/kumuluz-5-years", "announcement,community,news,product"),
    new BlogLink("Tracing KumuluzEE microservices with Jaeger", "https://blog.kumuluz.com/developers/community/2019/02/11/kumuluzee-opentracing-jaeger", "developers,community")
];
