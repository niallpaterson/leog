import * as React from 'react';
import { css } from 'linaria';
import { Grid } from '../components';
import { theme } from '../styles/theme';
import Image from 'next/image';
import {
	Title,
	Caption,
	Display,
	Paragraph,
	ImageClip,
	IntersectionAnchor,
} from '../components';
import { Popup, Pulldown, FadeIn } from '../animations';
import { useIntersectionObserver } from '../hooks';
import LeoGraham from '../public/images/leo-graham.jpg';

const TwoHundred = Array(80)
	.fill(null)
	.map((x, i) => i / 80);

// TODO: Abstract this, and only set the variable, without
// triggering a re-render of the component (the intersection
// should be internal to that function, not the component)
// useIntersectionParralax -- f(ref, ... intersection props, increment, transform function)

type Ref<T extends HTMLElement = HTMLElement> =
	| React.MutableRefObject<T>
	| React.RefObject<T>;

export const About: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);

	const customProperty = '--image-transform';

	const [entry] = useIntersectionObserver(
		sectionRef,
		{ threshold: TwoHundred },
		(entry) => {
			imageRef?.current?.style.setProperty(
				customProperty,
				`translateY(-${entry.intersectionRatio * 10 + 25}%)`
			);
		}
	);

	return (
		<Grid.Item as='section' start={1} end={13} subGrid>
			<Grid.Item start={1} end={8}>
				<Pulldown delay={50}>
					<Title>LEO M. GRAHAM</Title>
				</Pulldown>
			</Grid.Item>
			<Grid.Item start={8} end={13}>
				<Caption
					as='p'
					className={css`
						text-align: end;
					`}
				>
					<Pulldown delay={75}>01, 02, 03, 04, 05</Pulldown>
				</Caption>
			</Grid.Item>
			<Grid.Item start={1} end={7}>
				<ImageClip
					ref={imageRef}
					className={css`
						height: 160px;
						margin-top: ${theme.spacing.md};
					`}
				>
					<FadeIn>
						<Image
							alt='Leo Graham'
							src={LeoGraham}
							className={css`
								transform: var(${customProperty});
							`}
						/>
					</FadeIn>
				</ImageClip>
			</Grid.Item>
			<Grid.Item
				start={2}
				end={6}
				className={css`
					align-self: end;
					max-width: 20rem;
				`}
			>
				<Paragraph>
					I AM A SPECIALIST SHAKESPEAREAN DIRECTOR AND ACTOR
				</Paragraph>
				<Paragraph>I AM A TRAINED TEACHER OF THE CHEKHOV TECHNIQUE</Paragraph>
			</Grid.Item>
			<Grid.Item
				start={6}
				end={13}
				className={css`
					margin-top: ${theme.spacing.md};
				`}
			>
				<Display>
					{'ACTOR'.split('').map((char, i) => (
						<Popup trigger={true} key={'actor-' + i} delay={100 + i * 20}>
							{char}
						</Popup>
					))}
					<br />
					{'DIRECTOR'.split('').map((char, i) => (
						<Popup trigger={true} key={'actor-' + i} delay={100 + i * 20}>
							{char}
						</Popup>
					))}
					<br />
					{'FACILITATOR'.split('').map((char, i) => (
						<Popup trigger={true} key={'actor-' + i} delay={100 + i * 20}>
							{char}
						</Popup>
					))}
				</Display>
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
