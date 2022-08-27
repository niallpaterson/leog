import * as React from 'react';
import { styled } from 'linaria/react';

type ImageClipProps = {
	height?: string;
	width?: string;
};

export const ImageClip = styled.div<ImageClipProps>`
	overflow: clip;
	height: ${({ height }) => height ?? '100%'};
	width: ${({ width }) => width ?? '100%'};
`;
