const API_BASE_URL = 'https://manage.athaararabia.com/api';


export const fetchLocations = async ({ selectedLanguageCode, userAgent, deviceId }) => {
    try {
        const url = new URL(`${API_BASE_URL}/tour/locations`);

        url.searchParams.set('language_code', selectedLanguageCode);
        url.searchParams.set('user_agent', userAgent);
        url.searchParams.set('device_id', deviceId);

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store', // Avoid caching if needed in App Router
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch locations: ${response.status} ${errorDetails}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in fetchLocations:', error.message);
        throw error;
    }
};

export const fetchCategory = async ({ selectedLanguageCode, userAgent, deviceId }) => {
    try {
        const url = new URL(`${API_BASE_URL}/tour/categories`);

        url.searchParams.set('language_code', selectedLanguageCode);
        url.searchParams.set('user_agent', userAgent);
        url.searchParams.set('device_id', deviceId);

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store', // Avoid caching if needed in App Router
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch categories: ${response.status} ${errorDetails}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in fetchcategories:', error.message);
        throw error;
    }
};

export const fetchPopulerTours = async ({ selectedLanguageCode, userAgent, deviceId }) => {
    try {
        const url = new URL(`${API_BASE_URL}/tour/popular-tours`);

        url.searchParams.set('language_code', selectedLanguageCode);
        url.searchParams.set('user_agent', userAgent);
        url.searchParams.set('device_id', deviceId);

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch popular-tours: ${response.status} ${errorDetails}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in popular-tours:', error.message);
        throw error;
    }
};

export const fetchContactData = async ({ selectedLanguageCode, userAgent, deviceId }) => {
    try {
        const url = new URL(`${API_BASE_URL}/general-settings`);

        url.searchParams.set('language_code', selectedLanguageCode);
        url.searchParams.set('user_agent', userAgent);
        url.searchParams.set('device_id', deviceId);

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch popular-tours: ${response.status} ${errorDetails}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in popular-tours:', error.message);
        throw error;
    }
};

export const fetchBlogsData = async ({ selectedLanguageCode, userAgent, deviceId }) => {
    try {
        const url = new URL(`${API_BASE_URL}/blogs`);

        url.searchParams.set('language_code', selectedLanguageCode);
        url.searchParams.set('user_agent', userAgent);
        url.searchParams.set('device_id', deviceId);

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch blogs: ${response.status} ${errorDetails}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in blogs:', error.message);
        throw error;
    }
};

export const fetchMetaInfoDetails = async ({ selectedLanguageCode, userAgent, deviceId, slug }) => {
    try {
        const url = new URL(`${API_BASE_URL}/page/details`);

        url.searchParams.set('language_code', selectedLanguageCode);
        url.searchParams.set('user_agent', userAgent);
        url.searchParams.set('device_id', deviceId);
        url.searchParams.append('slug', slug);

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch blogs: ${response.status} ${errorDetails}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in blogs:', error.message);
        throw error;
    }
};  