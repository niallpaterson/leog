import { styled } from 'linaria/react';

export const GlobalStyles = styled.div`
	:global() {
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		* {
			margin: 0;
		}

		html,
		body {
			height: 100%;
		}

		body {
			line-height: 1.5;
			-webkit-font-smoothing: antialiased;
		}

		img,
		picture,
		video,
		canvas,
		svg {
			display: block;
		}

		input,
		button,
		textarea,
		select {
			font: inherit;
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			overflow-wrap: break-word;
		}

		#root,
		#__next {
			isolation: isolate;
		}

		/* Disable common vendor styles */
		ul,
		ol {
			list-style: none;
		}

		a {
			text-decoration: none;
		}

		button {
			background: unset;
			border: unset;
			cursor: pointer;
		}

		a {
			cursor: pointer;
		}

		address {
			font-style: normal;
		}
	}
`;
