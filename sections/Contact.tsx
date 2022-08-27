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

type Ref<T extends HTMLElement = HTMLElement> =
	| React.MutableRefObject<T>
	| React.RefObject<T>;

export const Contact: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);

	const [entry] = useIntersectionObserver(sectionRef, { threshold: 1 });

	const triggerAnimations = !!entry?.isIntersecting;

	console.log(triggerAnimations);

	return (
		<Grid.Item
			as='section'
			start={1}
			end={13}
			subGrid
			className={css`
				position: relative;
			`}
		>
			<Grid.Item start={1} end={13}>
				<Title
					className={css`
						margin-bottom: ${theme.spacing.sm};
						& > a {
							display: inline-block;
							line-height: 1.5;
						}
					`}
				>
					<a>
						{'LEOMGRAHAM@GMAIL.COM'.split('').map((char, i) => (
							<Popup
								trigger={triggerAnimations}
								key={'actor-' + i}
								delay={100 + i * 20}
							>
								{char}
							</Popup>
						))}
					</a>
					<a>
						{'+44 (0) 7709 556 550'.split('').map((char, i) => (
							<Popup
								trigger={triggerAnimations}
								key={'actor-' + i}
								delay={100 + i * 20}
							>
								{char}
							</Popup>
						))}
					</a>
					<a>
						{'MYDUMBAGENT@MAIL.COM'.split('').map((char, i) => (
							<Popup
								trigger={triggerAnimations}
								key={'actor-' + i}
								delay={100 + i * 20}
							>
								{char}
							</Popup>
						))}
					</a>
				</Title>
				<Grid.Item
					start={6}
					end={13}
					className={css`
						margin-top: ${theme.spacing.md};
					`}
				>
					<Display>
						{'TWITTER'.split('').map((char, i) => (
							<Popup
								trigger={triggerAnimations}
								key={'actor-' + i}
								delay={100 + i * 20}
							>
								{char}
							</Popup>
						))}
						<br />
						{'FACEBOOK'.split('').map((char, i) => (
							<Popup
								trigger={triggerAnimations}
								key={'actor-' + i}
								delay={100 + i * 20}
							>
								{char}
							</Popup>
						))}
						<br />
						{'INSTAGRAM'.split('').map((char, i) => (
							<Popup
								trigger={triggerAnimations}
								key={'actor-' + i}
								delay={100 + i * 20}
							>
								{char}
							</Popup>
						))}
					</Display>
				</Grid.Item>
			</Grid.Item>
			<IntersectionAnchor
				ref={sectionRef}
				className={css`
					position: absolute;
					height: 80vh;
					width: 1px;
					top: 0;
				`}
			/>
		</Grid.Item>
	);
};
