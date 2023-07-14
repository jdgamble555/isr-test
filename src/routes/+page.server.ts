import type { Actions, PageServerLoad } from './$types';
import { BYPASS_TOKEN } from '$env/static/private';

export const config = {
    isr: {
        expiration: false,
        bypassToken: BYPASS_TOKEN
    }
};

export const actions = {
    default: async () => {
        await fetch('https://isr-test-ten.vercel.app/', {
            method: 'GET',
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });
    }
} satisfies Actions;

export const load = (async () => {

    const n = Math.random();

    return {
        n
    };
}) satisfies PageServerLoad;