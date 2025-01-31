/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.json`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Client } from 'fauna'

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// Property 'default' does not exist on type 'CacheStorage'
		// Works if Line 14 is Commented Out / Removed
		const cache = caches.default

		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
