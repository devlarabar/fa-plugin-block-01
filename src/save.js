/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const {
        attributes: { title, mediaCaption, mediaURL, buttonText, buttonURL, content, isInternalLink },
    } = props;

    const blockProps = useBlockProps.save({
        className: "fa-media-emphasis-block"
    });
    return (
        <div {...blockProps}>
            <div className="fa-emphasis-block-media-content">
                {mediaURL && (
                    <div class="fa-media-emphasis-image-container" style={{ backgroundImage: `url(${mediaURL})` }}>
                        {mediaCaption && <span className="inner-caption-span">{mediaCaption}</span>}
                    </div>
                )}
                <div className="fa-emphasis-block-text-container">
                    <RichText.Content
                        tagName="h2"
                        value={title}
                    />
                    <RichText.Content
                        tagName="div"
                        value={content}
                    />
                </div>
            </div>
            <div className="fa-emphasis-block-button-container">
                <a href={isInternalLink ? `/${buttonURL}` : buttonURL} target={isInternalLink ? "_self" : "_blank"} rel="noopener">
                    <button className="fa-media-emphasis-block-btn wp-block-button__link wp-element-button">
                        {buttonText ? buttonText + " →" : "Read More →"}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Save;
