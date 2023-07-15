import type { PageServerLoad } from './$types';
import { BYPASS_TOKEN } from '$env/static/private';

export const config = {
    isr: {
        expiration: false,
        bypassToken: BYPASS_TOKEN
    }
};

export const load = (async () => {

    const n = Math.random();

    return {
        n
    };
}) satisfies PageServerLoad;