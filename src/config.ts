export const SITE = {
	title: 'Platzi Fake Store API',
	description: 'Platzi Fake Store API',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	// Spanish: 'es',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/platzilabs/fake-api-site/blob/master/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR = {
	en: {
    'Rest API': [
      { text: 'Introduction', link: 'en/rest/introduction' },
      { text: 'Products', link: 'en/rest/products' },
      { text: 'Filter Products', link: 'en/rest/products-filter' },
      { text: 'Categories', link: 'en/rest/categories' },
      { text: 'Users', link: 'en/rest/users' },
      { text: 'Auth JWT', link: 'en/rest/auth-jwt' },
      { text: 'Files', link: 'en/rest/files' },
      { text: 'Swagger Docs', link: 'en/rest/swagger' },
    ],
    'GraphQL': [
      { text: 'Introduction', link: 'en/gql/introduction' },
      { text: 'Products', link: 'en/gql/products' },
      { text: 'Filter Products', link: 'en/gql/products-filter' },
      { text: 'Categories', link: 'en/gql/categories' },
      { text: 'Users', link: 'en/gql/users' },
      { text: 'Auth JWT', link: 'en/gql/auth-jwt' },
      // { text: 'Files', link: 'en/gql/files' },
      { text: 'Playground', link: 'en/gql/playground' },
    ],
    'Resources': [
      { text: 'Postman', link: 'en/resources/postman' },
      { text: 'Insomnia', link: 'en/resources/insomnia' },
      // { text: 'Figma', link: 'en/resources/figma' },
    ]
  }
};
