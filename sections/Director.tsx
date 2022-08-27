import * as React from 'react';
import { css } from 'linaria';
import { Grid, Heading } from '../components';
import Image from 'next/image';
import {
	Title,
	Caption,
	Display,
	Paragraph,
	ImageClip,
	IntersectionAnchor,
	ExternalLink,
} from '../components';
import Director1 from '../public/images/director-1.jpg';
import theme from '../styles/theme';

export const Director: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);

	return (
		<Grid.Item as='section' start={1} end={13} subGrid>
			<Grid.Item start={2} end={13}>
				<Heading>AS A DIRECTOR, I AM LED BY THE ACTOR AND TEXT.</Heading>
			</Grid.Item>
			<Grid.Item subGrid start={1} end={12}>
				<Grid.Item
					start={2}
					end={11}
					className={css`
						/* position: relative;  */
					`}
				>
					<ImageClip height='120px'>
						<Image
							src={Director1}
							alt=''
							layout='responsive'
							width='100%'
							height='80px'
						/>
					</ImageClip>
				</Grid.Item>
				<Grid.Item start={2} end={8} paddingTop={theme.spacing.sm}>
					<Paragraph>
						<span>As director, assistant director, and acting coach,</span>
						<br />
						<span> For theatre and opera alike,</span>
						<br />I let the union of performer and text shape my craft.
					</Paragraph>
				</Grid.Item>
				<Grid.Item start={7} end={12} paddingTop={theme.spacing.md}>
					<Paragraph>
						I lead my theatre company{' '}
						<span style={{ textDecoration: 'underline' }}>
							The Albion Theatre
						</span>{' '}
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
