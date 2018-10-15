
export const MOBILE_MENU_VISIBLE_BELOW = 1745;
export const MEDIA_MOBILE = 790;

export const determineScreenSize = () => {
    if (typeof window !== "undefined") {
        if (typeof window.visualViewport !== "undefined") {
            return window.visualViewport.width;
        } else {
            return window.innerWidth;
        }
    }
    return 0;
};
