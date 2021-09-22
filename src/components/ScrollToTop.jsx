import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Taken from https://stackoverflow.com/a/61602724/4052428
 * Scrolls the page to the top on route change when rendered inside a router
 */

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}