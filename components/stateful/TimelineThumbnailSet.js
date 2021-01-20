import { lifecycle } from 'recompose';
import TimelineThumbnailSet from '../presentational/TimelineThumbnailSet';

export default lifecycle({
	shouldComponentUpdate(nextProps) {
		return (this.props.x !== nextProps.x) || (this.props.files === nextProps.files);
	},
})(TimelineThumbnailSet);
