import * as React from 'react';
import { css } from 'linaria';
import { Grid, Heading } from '../components';
import Image from 'next/image';
import { Paragraph, ImageClip, IntersectionAnchor } from '../components';
import Director1 from '../public/images/director-1.jpg';
import theme from '../styles/theme';

export const Director: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);

	return (
		<Grid.Item as='section' start={1} end={13} subGrid>
			<Grid.Item start={3} end={12}>
				<Heading>AS A DIRECTOR, I AM LED BY THE ACTOR AND TEXT.</Heading>
			</Grid.Item>
			<Grid.Item subGrid start={1} end={12}>
				<Grid.Item start={3} end={12} paddingTop={theme.spacing.xs}>
					<ImageClip height='120px'>
						<Image
							src={Director1}
							alt=''
							layout='responsive'
							width='100%'
							height={theme.spacing.md}
						/>
					</ImageClip>
				</Grid.Item>
				<Grid.Item start={3} end={7} paddingTop={theme.spacing.sm}>
					<Paragraph>
						I let the union of performer and text shape my craft.
					</Paragraph>
				</Grid.Item>
				<Grid.Item start={7} end={11} paddingTop={theme.spacing.lg}>
					<Paragraph>
						I lead my theatre company
						<span style={{ textDecoration: 'underline' }}>
							{' '}
							The Albion Theatre{' '}
						</span>
						on nationwide tours of theatres, gardens, and schools.
					</Paragraph>
				</Grid.Item>
			</Grid.Item>
			<IntersectionAnchor
				ref={sectionRef}
				className={css`
					position: absolute;
					height: 20vh;
					width: 1px;
					top: 100vh;
				`}
			/>
		</Grid.Item>
	);
};
