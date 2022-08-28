import * as React from 'react';
import { css } from 'linaria';
import { Grid, Heading } from '../components';
import Image from 'next/image';
import {
	Title,
	Caption,
	Display,
	Paragraph,
	Body,
	ImageClip,
	IntersectionAnchor,
	ExternalLink,
} from '../components';
import Director1 from '../public/images/director-1.jpg';
import theme from '../styles/theme';

export const Facilitator: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);

	return (
		<Grid.Item as='section' start={1} end={13} subGrid>
			<Grid.Item start={1} end={13} subGrid>
				<Grid.Item start={2} end={8}>
					<Heading>
						A CATCHY, PITCHY TITLE INTRODUCING FACILITATOR SECTION
					</Heading>
				</Grid.Item>
			</Grid.Item>
			<Grid.Item start={1} end={13} subGrid paddingTop={theme.spacing.xs}>
				<Grid.Item start={2} end={7}>
					<Body>
						I teach acting at all levels. I have coached professional singers
						and actors and developed the style of young performers. At the
						Lewisham Youth Theatre I ... concrete info here. ... My theatre
						company, the Albion Theatre, also has a dedicated education part,
						which aims to ... concrete info...
					</Body>
				</Grid.Item>

				<Grid.Item start={8} end={12} subGrid paddingTop={theme.spacing.lg}>
					<Grid.Item start={8} end={12}>
						<Paragraph>
							I help deepen the performance of monologue and aria.
						</Paragraph>
					</Grid.Item>
					<Grid.Item start={8} end={12} paddingTop={theme.spacing.xs}>
						<Paragraph>
							I enrich younger performers&apos; performance styles.
						</Paragraph>
					</Grid.Item>
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
