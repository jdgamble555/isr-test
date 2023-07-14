import type { Actions, PageServerLoad } from './$types';
import { BYPASS_TOKEN } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const config = {
    isr: {
        expiration: false,
        bypassToken: BYPASS_TOKEN
    }
};

export const actions = {
    default: async ({ fetch }) => {
        const path = 'https://isr-test-ten.vercel.app';
        const revalidateResponse = await fetch(path, {
            method: 'GET',
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });
        const cacheHeader = revalidateResponse.headers.get('x-vercel-cache');
        if (cacheHeader !== 'REVALIDATED') {
            console.error(new Error(`Revalidation of ${path} failed.`));
            fail(404, { problem: `Revalidation of ${path} failed: "x-vercel-cache" is "${cacheHeader}"` });
            return
        }
    }
} satisfies Actions;

export const load = (async () => {

    const n = Math.random();

    return {
        n
    };
}) satisfies PageServerLoad;