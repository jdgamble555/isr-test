import { BYPASS_TOKEN } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {

    default: async ({ fetch }) => {
        const x = await fetch('/', {
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });
        if (!x.ok) {
            return fail(400, { error: 'Revalidate Error '});
        }
        return { success: true };
    }

} satisfies Actions;