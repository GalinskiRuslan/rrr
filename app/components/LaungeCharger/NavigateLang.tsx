import {
    createLocalizedPathnamesNavigation,
    Pathnames,
} from "next-intl/navigation";

export const locales = ["kz", "ru", "en", "ch"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    "/": {
        kz: "/",
        ru: "/",
        en: "/",
        ch: "/",
    },

    // If locales use different paths, you can
    // specify each external path per locale.

    // Dynamic params are supported via square brackets

    // Also (optional) catch-all segments are supported
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });