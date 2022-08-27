import { animated, useSpring, easings } from 'react-spring';
import { css } from 'linaria';

const { easeOutBounce } = easings;

type PopupProps = {
	children: React.ReactNode;
	delay?: number;
	trigger: boolean;
};

export const Popup: React.FC<PopupProps> = ({ children, delay, trigger }) => {
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
