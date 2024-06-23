=== Example Static ===
Contributors:      David Yip
Tags:              block
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Show a read-more link for a post

== Description ==

This is a plugin created for DMG. It's a Gutenberg block allowing you to create a stylised read more anchor link.

There is also a WP-CLI command that detects the use of Gutenberg blocks created by this plugin. In order to use it, type the following command in the comamnd line of the folder of your WordPress installation:

wp dmg-read-more search --date-before=YYYY-MM-DD --date-after=YYYY-MM-DD

The date before and date after parameters will search posts that are published on or before the --date-before date on or after the --date-after date.

For example, wp dmg-read-more search --date-before=2024-07-01 --date-after=2024-05-31 will return posts that make use of the Gutenberg blocks created by this plugin that were published between 2024-05-31 and 2024-07-01.

They are optional and if they are omitted it will default to the last 30 days.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/dmg-read-more` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.
