import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entry = z.object({
	title: z.string(),
	date: z.coerce.date(),
	summary: z.string(),
	draft: z.boolean().default(false),
});

const section = (name: string) =>
	defineCollection({ loader: glob({ pattern: '**/*.md', base: `./src/content/${name}` }), schema: entry });

export const collections = {
	travel: section('travel'),
	professional: section('professional'),
	outreach: section('outreach'),
};
