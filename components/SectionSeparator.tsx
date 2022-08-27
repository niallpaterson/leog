import * as React from 'react';
import Grid from './Grid';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { theme } from '../styles/theme';
import { Caption } from './Typography';

const HR = styled.hr`
	flex: 1;
	border-top: 1px solid white;
`;

export const SectionSeparator: React.FC<{ children: string }> = ({
	children,
}) => {
	return (
		<Grid.Item
			start={1}
			end={13}
			className={css`
				display: flex;
				align-items: center;
				gap: 32px;
				margin-top: ${theme.spacing.lg};
				margin-bottom: ${theme.spacing.lg};
			`}
		>
			<HR
				className={css`
					flex: 0.1;
				`}
			/>
			<Caption as='p'>{children}</Caption>
			<HR />
		</Grid.Item>
	);
};
