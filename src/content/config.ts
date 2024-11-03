import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		updatedDate: z.coerce.date(),
		heroImage: z.string(),
	})
})

export const collections = { blog, work };
