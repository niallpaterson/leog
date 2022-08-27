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

export const Footer: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);

	const [entry] = useIntersectionObserver(sectionRef, { threshold: 1 });

	const triggerAnimations = !!entry?.isIntersecting;

	console.log(triggerAnimations);

	return (
		<Grid.Item
			as='footer'
			start={1}
			end={13}
			className={css`
				position: relative;
				background: ${theme.colors.white};
				overflow: clip;
			`}
		>
			<Title
				className={css`
					color: ${theme.colors.black};
					font-size: 3rem;
					width: max-content;
					overflow-x: clip;
				`}
			>
				{'COPYWRIGHT 2022 LEO M. GRAHAM > > > > > WEBSITE BY NIALL PATERSON'}
			</Title>
		</Grid.Item>
	);
};
