import React from 'react';
import { range } from 'ramda';
import { WrapperComponent, SkeletonForContext, SkeletonForAnnotation, Skeleton } from './styles';

const SplitViewSkeleton = () => (
	<WrapperComponent>
		{range(0, 2).map((skeletonKey) => (
			<div key={skeletonKey}>
				<SkeletonForContext>
					{range(0, 5).map((skeletonContextKey) => (
						<Skeleton key={skeletonContextKey} width="100%" />
					))}
				</SkeletonForContext>

				<SkeletonForAnnotation>
					<Skeleton height="24rem" width="100%" />
				</SkeletonForAnnotation>
			</div>
		))}
	</WrapperComponent>
);

export default SplitViewSkeleton;
