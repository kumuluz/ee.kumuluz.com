import {BlogLink} from "./schema/blog-link.class";

// If there are less or more than three BlogLinks it can break design! Keep it at exactly three BlogLinks.
export const blogLinks = [
    new BlogLink("KumuluzEE 3.0.0 is released!", "https://blog.kumuluz.com/product/announcement/developers/2018/10/03/kumuluzee-3.0.0-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE Testing 1.1.0 released", "https://blog.kumuluz.com/product/developers/2018/10/12/kumuluzee-testing-1.1.0-release", "product,announcement,developers"),
    new BlogLink("KumuluzEE GraphQL officially released!", "https://blog.kumuluz.com/product/announcement/developers/2018/10/12/kumuluzee-graphql-1.0.0-release", ["product", "developers"])
];
