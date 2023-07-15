import { BYPASS_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch }) => {

    const x = await fetch('/', {
        headers: {
            'x-prerender-revalidate': BYPASS_TOKEN
        }
    });

    return json({
        x
    });
}) satisfies RequestHandler;
