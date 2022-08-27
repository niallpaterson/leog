import { animated, useSpring, easings } from 'react-spring';
import { css } from 'linaria';

const { easeOutBounce } = easings;

type DragRightProps = {
	children: React.ReactNode;
	delay?: number;
};

export const DragRight: React.FC<DragRightProps> = ({ children, delay }) => {
	const { scaleX } = useSpring({
		from: { scaleX: 0 },
		to: { scaleX: 1 },
		config: {
			friction: 28,
			tension: 180,
			bounce: 4,
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
				transform-origin: bottom;
			`}
			style={{
				transform: scaleX.to((scale) => `scaleX(${scale})`),
			}}
		>
			{children}
		</animated.span>
	);
};
