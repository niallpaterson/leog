import * as React from 'react';
import { css } from 'linaria';
import { Grid, Heading } from '../components';
import { theme } from '../styles/theme';
import { styled } from 'linaria/lib/react';
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
import { Popup, Pulldown } from '../animations';
import { useIntersectionObserver } from '../hooks';
import LeoActor from '../public/images/leo-actor.jpg';
import Globe from '../public/images/globe.png';
import MCT from '../public/images/mct.png';
import RCS from '../public/images/rcs.png';

const TwoHundred = Array(80)
	.fill(null)
	.map((x, i) => i / 80);

type Ref<T extends HTMLElement = HTMLElement> =
	| React.MutableRefObject<T>
	| React.RefObject<T>;

export const Actor: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);

	// const customProperty = '--image-transform';

	// const [entry] = useIntersectionObserver(
	// 	sectionRef,
	// 	{ threshold: TwoHundred },
	// 	(entry) => {
	// 		imageRef?.current?.style.setProperty(
	// 			customProperty,
	// 			`translateY(-${entry.intersectionRatio * 10 + 25}%)`
	// 		);
	// 	}
	// );

	const imageTransform = '--image-transform-horizontal';

	return (
		<Grid.Item as='section' start={1} end={13} subGrid>
			<Grid.Item start={1} end={13} subGrid>
				<Grid.Item
					start={2}
					end={6}
					className={css`
						border: 2px solid ${theme.colors.white};
						position: relative;
					`}
				>
					<ImageClip
						ref={imageRef}
						className={css`
							height: 100%;
							position: relative;
						`}
					>
						<Image
							src={LeoActor}
							objectPosition='top center'
							objectFit='cover'
							layout='fill'
							alt='leo'
						/>
					</ImageClip>
				</Grid.Item>
				<Grid.Item start={7} end={12}>
					<Heading>A UNIQUE APPROACH TO CLASSICAL & CONTEMPORARY TEXTS</Heading>
					<Paragraph>
						My style comes from my training at the Michael Chekhov International
						Academy in Berlin, Shakespeare’s Globe in London, and the Royal
						Conservatoire of Scotland in Glasgow.
					</Paragraph>
				</Grid.Item>
			</Grid.Item>
			<Grid.Item start={1} end={13} subGrid paddingTop={theme.spacing.sm}>
				<Grid.Item
					start={2}
					end={6}
					justifyContent='space-evenly'
					alignItems='center'
					className={css`
						position: relative;
						display: flex;
					`}
				>
					<Image src={Globe} alt='' width='82px' height='82px' />
					<Image
						src={RCS}
						alt=''
						height='82px'
						width='104px'
						objectFit='contain'
					/>
					<Image src={MCT} alt='' width='82px' height='82px' />
				</Grid.Item>
				<Grid.Item
					start={7}
					end={12}
					alignItems='center'
					className={css`
						display: flex;
					`}
				>
					<ExternalLink
						className={css`
							margin-right: ${theme.spacing.xs};
						`}
					>
						<Caption as='p'>SPOTLIGHT</Caption>
					</ExternalLink>
					<ExternalLink>
						<Caption as='p'>SHOWREEL</Caption>
					</ExternalLink>
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
