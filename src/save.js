import { useBlockProps } from "@wordpress/block-editor";
import renderContent from "./utils";

const Save = ({ attributes }) => {
	const { savedPost } = attributes;

	const blockProps = useBlockProps.save({
		className: "dmg-read-more",
		"data-post-id": savedPost?.id,
		savedPost
	});

	if (!savedPost) return null;

	return <div {...blockProps}>
		{renderContent(savedPost)}
	</div>;
};

export default Save;
