import { animated, useSpring, easings } from 'react-spring';
import { css } from 'linaria';

const { easeOutBounce } = easings;

type FadeInProps = {
	children: React.ReactNode;
	delay?: number;
};

export const FadeIn: React.FC<FadeInProps> = ({ children, delay }) => {
	const { opacity } = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
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
				opacity: opacity.to((value) => value),
			}}
		>
			{children}
		</animated.span>
	);
};
