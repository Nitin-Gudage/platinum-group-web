import { useEffect } from "react";

/*
  Custom SEO Hook for React 19 + Vite
  Updates head tags without react-helmet
*/

const useSEO = ({ title, description, keywords }) => {
    useEffect(() => {
        /* ================= TITLE ================= */

        if (title) {
            document.title = title;
        }

        /* ================= DESCRIPTION ================= */

        if (description) {
            let metaDesc = document.querySelector(
                "meta[name='description']"
            );

            if (!metaDesc) {
                metaDesc = document.createElement("meta");
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }

            metaDesc.setAttribute("content", description);
        }

        /* ================= KEYWORDS (OPTIONAL) ================= */

        if (keywords) {
            let metaKeywords = document.querySelector(
                "meta[name='keywords']"
            );

            if (!metaKeywords) {
                metaKeywords = document.createElement("meta");
                metaKeywords.name = "keywords";
                document.head.appendChild(metaKeywords);
            }

            metaKeywords.setAttribute("content", keywords);
        }

        /* ================= CANONICAL ================= */

        let canonical = document.querySelector(
            "link[rel='canonical']"
        );

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        canonical.setAttribute(
            "href",
            window.location.origin + window.location.pathname
        );

    }, [title, description, keywords]);
};

export default useSEO;
