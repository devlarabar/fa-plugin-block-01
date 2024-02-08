import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
    title: "Fem Art Custom Block 01",
    icon: "hammer",
    category: "design",
    attributes: {
        title: { type: "string" },
        content: { type: "string" },
        mediaID: { type: "string" },
        mediaURL: { type: "string" },
        mediaCaption: { type: "string" },
        buttonText: { type: "string" },
        buttonURL: { type: "string" },
        isInternalLink: { type: "boolean" }
    },
    edit: Edit,
    save: Save
})