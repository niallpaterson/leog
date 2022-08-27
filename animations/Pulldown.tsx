import { animated, useSpring, easings } from 'react-spring';
import { css } from 'linaria';

const { easeOutBounce } = easings;

type PulldownProps = {
	children: React.ReactNode;
	delay?: number;
};

export const Pulldown: React.FC<PulldownProps> = ({ children, delay }) => {
	const { scaleY } = useSpring({
		from: { scaleY: 0 },
		to: { scaleY: 1 },
		config: {
			friction: 18,
			tension: 180,
			bounce: 2,
			easing: easeOutBounce,
		},
		delay,
	});

	return (
		<animated.span
			className={css`
				display: inline-block;
				overflow: clip;
				height: 100%;
				transform-origin: top;
			`}
			style={{
				transform: scaleY.to((scale) => `scaleY(${scale})`),
			}}
		>
			{children}
		</animated.span>
	);
};
