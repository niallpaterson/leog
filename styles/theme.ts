export const theme = {
	colors: {
		black: '#000B0E',
		white: '#FFFCFC',
		gray: {
			light: '#A2A7A8',
			dark: '#666D6E',
		},
	},
	font: {
		family: {
			title: 'Lato, sans-serif',
			display: "'Crimson Text', sans-serif",
			heading: "'Bona Nova', sans-serif",
			paragraph: 'Lato, sans-serif',
		},
		size: {
			xs: '0.5rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
			xxl: '2rem',
		},
	},
	spacing: {
		xs: '28px',
		sm: '64px',
		md: '96px',
		lg: '256px',
	},
	breakPoint: {
		xxs: '320px',
		xs: '375px',
		sm: '425px',
		md: '768px',
		lg: '1024px',
		xl: '1440px',
		xxl: '2560px',
	},
} as const;

export default theme;
