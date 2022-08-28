import * as React from 'react';
import { styled } from 'linaria/react';

type ImageClipProps = {
	height?: string;
	width?: string;
	children?: React.ReactNode;
};

export const ImageClip: React.FC<ImageClipProps> = ({
	height,
	width,
	children,
}) => {
	return (
		<Clip height={height} width={width}>
			<Container>{children}</Container>
		</Clip>
	);
};

const Clip = styled.div<ImageClipProps>`
	overflow: clip;
	flex: 1;

	height: ${({ height }) => height ?? '100%'};
	width: ${({ width }) => width ?? '100%'};
	display: flex;
	align-items: center;
`;

const Container = styled.div<ImageClipProps>`
	flex: 1;
`;
