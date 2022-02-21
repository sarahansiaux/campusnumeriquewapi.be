const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/conditions-dutilisation.svelte"),
	() => import("../../../src/routes/protection-des-donnees.svelte"),
	() => import("../../../src/routes/mentions-legales.svelte"),
	() => import("../../../src/routes/actualites.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/conditions-dutilisation.svelte
	[/^\/conditions-dutilisation\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/protection-des-donnees.svelte
	[/^\/protection-des-donnees\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/mentions-legales.svelte
	[/^\/mentions-legales\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/actualites.svelte
	[/^\/actualites\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];