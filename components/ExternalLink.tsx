import { styled } from 'linaria/lib/react';
import { theme } from '../styles/theme';

export const ExternalLink = styled.a`
	display: inline-block;
	border: 2px solid ${theme.colors.white};
	padding: 8px 16px;
	transition: all 2s cubic-bezier(0.22, 1, 0.36, 1);
	&:hover {
		background: ${theme.colors.white};
		& > * {
			transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
			color: ${theme.colors.black};
		}
	}
`;
