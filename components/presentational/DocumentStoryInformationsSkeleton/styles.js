import styled from '@emotion/styled';
import OriginalSkeleton from '../LoadingSkeleton';

export const WrapperComponent = styled.div`
	width: 100%;
	height: 100%;
	position: realtive;
	background: linear-gradient(to right, #141414 0%, #1f1e1e 100%);
	flex: 0 0 50rem;
	width: 50rem;
	padding-top: 6rem;
`;

export const SkeletonForContext = styled.div`
	padding: 0 4rem 4rem;
`;

export const SkeletonForAnnotation = styled.div`
	padding: 0 2rem 4rem;
`;

export const Skeleton = styled(OriginalSkeleton)`
	display: block;
	margin-bottom: 1.5rem;
`;
