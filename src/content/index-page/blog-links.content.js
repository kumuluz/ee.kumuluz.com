import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("Announcing KumuluzEE 3.3.0", "https://blog.kumuluz.com/product/announcement/developers/2019/04/01/kumuluzee-3.3.0-release", "product,announcement,developers"),
    new BlogLink("Kumuluz is celebrating 5 years! What we’ve done and the roadmap ahead", "https://blog.kumuluz.com/announcement/community/news/product/2019/03/10/kumuluz-5-years", "announcement,community,news,product"),
    new BlogLink("Tracing KumuluzEE microservices with Jaeger", "https://blog.kumuluz.com/developers/community/2019/02/11/kumuluzee-opentracing-jaeger", "developers,community")
];
