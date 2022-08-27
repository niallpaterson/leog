import { styled } from 'linaria/react';
import { theme } from '../styles/theme';

export const Title = styled.h1`
	font-family: ${theme.font.family.title};
	font-size: 4.75rem;
	line-height: 1;
	font-weight: 300;
	color: ${theme.colors.white};
`;

export const Heading = styled.h1`
	font-family: ${theme.font.family.heading};
	font-size: 3rem;
	color: ${theme.colors.white};
	line-height: 1.25;
	padding-bottom: 24px;
`;

export const Paragraph = styled.p`
	font-family: ${theme.font.family.paragraph};
	font-size: 1rem;
	color: ${theme.colors.white};
	padding-bottom: 16px;
	text-transform: uppercase;
`;

export const Display = styled.p`
	text-align: end;
	letter-spacing: 1px;
	line-height: 1.25;
	font-family: ${theme.font.family.display};
	color: ${theme.colors.white};
	font-size: 5.125rem;
	& > span {
		overflow: visible;
	}
`;

export const Caption = styled.caption`
	font-family: ${theme.font.family.paragraph};
	font-size: 1rem;
	color: ${theme.colors.white};
`;
