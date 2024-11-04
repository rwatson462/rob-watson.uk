import { defineCollection, z } from 'astro:content';

const content = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		type: z.union([z.literal('blog'), z.literal('history')]),
	}),
});

export const collections = { content };
