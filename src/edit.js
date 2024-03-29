/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const Edit = (props) => {
    const {
        attributes: {
            title,
            mediaID,
            mediaURL,
            mediaCaption,
            buttonText,
            buttonURL,
            content,
            isInternalLink
        },
        setAttributes,
    } = props;

    const blockProps = useBlockProps();

    const onChangeTitle = (value) => {
        setAttributes({ title: value });
    };

    const onSelectImage = (media) => {
        setAttributes({
            mediaURL: media.url,
            mediaID: media.id,
            mediaCaption: media.caption
        });
    };

    const onChangeContent = (value) => {
        setAttributes({ content: value });
    };

    const onChangeButtonURL = (value) => {
        setAttributes({ buttonURL: value });
    };

    const onChangeButtonText = (value) => {
        setAttributes({ buttonText: value });
    };

    return (
        <div {...blockProps} className="fa-media-emphasis-block">
            <div className="fa-media-emphasis-image fa-media-emphasis-image-edit" style={{ backgroundImage: `url(${mediaURL})` }}>
                <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes="image"
                    value={mediaID}
                    render={({ open }) => (
                        <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                            {!mediaID && __('Upload Image', 'femart-custom-block-01')}
                        </Button>
                    )}
                />
            </div>
            {mediaCaption && <div><span>Caption: {mediaCaption}</span></div>}
            <div className="fa-emphasis-block-text-container">
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={__(
                        'Title',
                        'femart-custom-block-01'
                    )}
                    value={title}
                    onChange={onChangeTitle}
                />
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={__(
                        'Content',
                        'femart-custom-block-01'
                    )}
                    value={content}
                    onChange={onChangeContent}
                />
            </div>
            <div className="fa-emphasis-block-button-container">
                <button className="fa-media-emphasis-block-btn wp-block-button__link wp-element-button">
                    {buttonText ? buttonText + " →" : "Read More →"}
                </button>
            </div>
            <InspectorControls>
                <PanelBody title="Button">
                    <TextControl
                        label="Link"
                        help={isInternalLink ? "Page Slug" : "FULL URL"}
                        value={buttonURL}
                        onChange={onChangeButtonURL}
                    />
                    <TextControl
                        label="Text"
                        value={buttonText}
                        onChange={onChangeButtonText}
                    />
                    <ToggleControl
                        label="Internal Link"
                        help={
                            isInternalLink
                                ? 'This is an internal link.'
                                : 'This links outside of FemArt.'
                        }
                        checked={isInternalLink}
                        onChange={(newValue) => {
                            setAttributes({ isInternalLink: newValue });
                        }}
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
};

export default Edit;
