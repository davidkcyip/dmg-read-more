import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";
import {
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import renderContent from "./utils";
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps({
		className: "dmg-read-more",
	});

	const { savedPost } = attributes;

	const [searchTerm, setSearchTerm] = useState("");
	const [page, setPage] = useState(1);
	const numPosts = 10;

	const posts = useSelect(
		(select) => {
			return select("core").getEntityRecords("postType", "post", {
				per_page: numPosts,
				page: page,
				search: searchTerm,
				order: "desc",
				order_by: "date",
			});
		},
		[searchTerm, page],
	);

	const onSelectPost = (post) => {
		setAttributes({
			savedPost: post,
		});
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Post Selection", "dmg-read-more")}>
					<TextControl
						label={__("Search Posts", "dmg-read-more")}
						value={searchTerm}
						onChange={(value) => setSearchTerm(value)}
					/>
					<div className="dmg-read-more__posts">
						{posts?.length > 0 ? posts?.map((post) => (
							<Button key={post.id} onClick={() => onSelectPost(post)}>
								{post.title.rendered}
							</Button>
						)) : <span>No posts found.</span>}
					</div>
					{posts?.length > 0 && (
						<div className="dmg-read-more__pagination">
							<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
								{__("Previous Page", "dmg-read-more")}
							</Button>
							<Button onClick={() => setPage(page + 1)} disabled={posts?.length < numPosts}>
								{__("Next Page", "dmg-read-more")}
							</Button>
						</div>)}
				</PanelBody>
			</InspectorControls>
			{savedPost && (
				<div>
					{renderContent(savedPost)}
				</div>
			)}
		</div>
	);
};

export default Edit;
