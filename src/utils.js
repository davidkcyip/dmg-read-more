import { __ } from "@wordpress/i18n";

const renderContent = (post) => {
	return (
		<>
			{__("Read More: ", "dmg-read-more")}
			<a href={post?.link} className="dmg-read-more">
				{post?.title?.rendered}
			</a>
		</>
	)
}

export default renderContent;
