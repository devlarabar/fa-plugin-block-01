<?php

/**
 * Plugin Name: FemArt Custom Block - 01
 * Description: FemArt Custom Block - 01: Vertical block with accented background containing media, title, text, and a button.
 */

function femart_custom_block_01()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'femart_custom_block_01');
