import { animated, useSpring, easings } from 'react-spring';
import * as React from 'react';
import { css } from 'linaria';

const { easeOutBounce } = easings;

type MarqueeProps = {
	copy: string;
	delay?: number;
	trigger: boolean;
	children?: React.ReactNode;
};

function setCharAt(str: string, index: number, chr: string) {
	if (index > str.length - 1) return str;
	return str.substring(0, index) + chr + str.substring(index + 1);
}

export const Marquee: React.FC<MarqueeProps> = ({
	copy,
	delay,
	trigger,
	children,
}) => {
	const { scaleY } = useSpring({
		from: { scaleY: 0 },
		to: { scaleY: trigger ? 1 : 0 },
		config: {
			friction: 28,
			tension: 180,
			bounce: 4,
			easing: easeOutBounce,
		},
		delay,
	});

	const replaceChar = (i: number, str: string) => {
		const first = str[i];
		const last = str[str.length - i];
		const firstReplaced = setCharAt(str, i, last);
		const lastReplaced = setCharAt(firstReplaced, str.length - i, first);
		return lastReplaced;
	};

	const allIncrements = copy.split('').map((char, i) => undefined);

	const config = {
		range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
		output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
	};

	return (
		<animated.span
			className={css`
				display: inline-block;
				overflow: clip;
				height: 100%;
				transform-origin: bottom;
			`}
			style={{
				transform: scaleY.to((scale) => `scaleY(${scale})`),
			}}
		>
			{children}
		</animated.span>
	);
};
