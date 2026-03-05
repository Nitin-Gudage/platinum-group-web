/**
 * API Response Cache Utility
 * Provides in-memory caching with TTL (Time To Live) for API responses
 */

const cache = new Map();

/**
 * Get cached data if still valid
 * @param {string} key - Cache key
 * @returns {any|null} Cached data or null if expired/missing
 */
export function getCached(key) {
    const item = cache.get(key);

    if (!item) return null;

    // Check if cache is expired
    if (Date.now() > item.expiry) {
        cache.delete(key);
        return null;
    }

    return item.data;
}

/**
 * Store data in cache with TTL
 * @param {string} key - Cache key
 * @param {any} data - Data to cache
 * @param {number} ttlMs - Time to live in milliseconds (default: 5 minutes)
 */
export function setCache(key, data, ttlMs = 5 * 60 * 1000) {
    cache.set(key, {
        data,
        expiry: Date.now() + ttlMs
    });
}

/**
 * Clear specific cache entry
 * @param {string} key - Cache key to clear
 */
export function clearCache(key) {
    cache.delete(key);
}

/**
 * Clear all cache entries
 */
export function clearAllCache() {
    cache.clear();
}

/**
 * Create a cached version of a fetch function
 * @param {Function} fetchFn - Async function to fetch data
 * @param {string} key - Cache key (can be function for dynamic keys)
 * @param {number} ttlMs - Time to live in milliseconds
 * @returns {Function} Cached fetch function
 */
export function createCachedFetch(fetchFn, key, ttlMs = 5 * 60 * 1000) {
    return async (...args) => {
        // Generate cache key (support dynamic keys via function)
        const cacheKey = typeof key === 'function' ? key(...args) : key;

        // Try to get cached data
        const cached = getCached(cacheKey);
        if (cached) {
            return cached;
        }

        // Fetch fresh data
        const data = await fetchFn(...args);

        // Store in cache
        setCache(cacheKey, data, ttlMs);

        return data;
    };
}

/**
 * Preload images for faster display
 * @param {string[]} urls - Array of image URLs to preload
 */
export function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

/**
 * Cache key generators for different endpoints
 */
export const cacheKeys = {
    heroSlides: 'hero_slides',
    acTypes: 'ac_types',
    metaData: 'meta_data',
    servicesByType: (id) => `services_${id}`,
    allServices: 'all_services'
};

// Default TTL values in milliseconds
export const cacheTTL = {
    short: 1 * 60 * 1000,      // 1 minute - for frequently changing data
    medium: 5 * 60 * 1000,     // 5 minutes - for standard API calls
    long: 30 * 60 * 1000,      // 30 minutes - for rarely changing data
    veryLong: 60 * 60 * 1000   // 1 hour - for static content
};
