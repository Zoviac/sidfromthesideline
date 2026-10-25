export const sections = {
	travel: { label: 'Travel', blurb: 'Places I have been and what I took from them.' },
	professional: { label: 'Professional', blurb: 'Work, projects, and things I have built.' },
	outreach: { label: 'Outreach', blurb: 'Volunteering, community work, and giving back.' },
} as const;

export type Section = keyof typeof sections;

// Frontmatter dates are parsed as UTC midnight, so format in UTC to avoid showing the previous day.
export const formatDate = (date: Date, dateStyle: 'medium' | 'long' = 'medium') =>
	date.toLocaleDateString('en-US', { dateStyle, timeZone: 'UTC' });
