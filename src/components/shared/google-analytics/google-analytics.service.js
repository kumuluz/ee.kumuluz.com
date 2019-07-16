import ReactGA from "react-ga";

export class GoogleAnalyticsService {

    static __init() {
        if (!GoogleAnalyticsService.isLoaded) {
            ReactGA.initialize("UA-96110617-3");
            GoogleAnalyticsService.isLoaded = true;
        }
    }

    static registerPageView() {
        if (!GoogleAnalyticsService.isLoaded) {
            GoogleAnalyticsService.__init();
        }
        if (typeof window !== "undefined" && GoogleAnalyticsService.isLoaded) {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }

    static registerEvent(category, action) {
        if (!GoogleAnalyticsService.isLoaded) {
            GoogleAnalyticsService.__init();
        }
        if (GoogleAnalyticsService.isLoaded) {
            ReactGA.event({
                category: category,
                action: action
            });
        }
    }
}
