(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{490:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"metaboxes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metaboxes"}},[t._v("#")]),t._v(" Metaboxes "),a("Badge",{attrs:{text:"enhancement",type:"warn"}})],1),t._v(" "),a("p",[t._v("If you are used the ReduxFramework declaration arrays, you know Redux Metaboxes. They're one and the same! The only\ndifference is a parent array. We'll go through a few examples to get you up and running. Please know, you MUST have an\noptions page for metaboxes to work. They're inter-connected. You can, however, make a fake options panel, and hide it\nfrom the admin menu. But the metaboxes extensions works best when united with a panel.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),a("li",[a("a",{attrs:{href:"#metaboxes-api"}},[t._v("Metaboxes API")])]),a("li",[a("a",{attrs:{href:"#example-config"}},[t._v("Example Config")])]),a("li",[a("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")]),a("ul",[a("li",[a("a",{attrs:{href:"#accessing-data-within-loops"}},[t._v("Accessing Data Within Loops")])]),a("li",[a("a",{attrs:{href:"#missing-sidebar"}},[t._v("Missing Sidebar?!")])]),a("li",[a("a",{attrs:{href:"#binding-metabox-visibility-to-page-template-amp-post-formats"}},[t._v("Binding Metabox Visibility to Page Template & Post Formats")])]),a("li",[a("a",{attrs:{href:"#how-are-the-redux-metabox-values-stored"}},[t._v("How are the Redux Metabox Values Stored?")])])])])])]),a("p")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Getting Started")]),t._v(" "),a("p",[t._v("To understand how to use extensions, you should read this article on "),a("router-link",{attrs:{to:"/guides/basics/using-extensions.html"}},[t._v("Using Extensions")]),t._v(".\nTo shortcut the process, you can use the "),a("a",{attrs:{href:"http://build.redux.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux Build"),a("OutboundLink")],1),t._v(" site. Please be aware that a working\nknowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other\n(or both), please refer to the following guides to get you started:\n"),a("a",{attrs:{href:"http://www.php.net/manual/en/tutorial.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with PHP"),a("OutboundLink")],1),t._v(",\n"),a("a",{attrs:{href:"http://www.w3schools.com/css/css_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Introduction"),a("OutboundLink")],1),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable.")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("This is the title that appears on the box")])]),t._v(" "),a("tr",[a("td",[t._v("post_types")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("Provide any number of post_types for a given metabox to appear.")])]),t._v(" "),a("tr",[a("td",[t._v("page_template")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("Bind visibility of a metabox to any number of page templates. The value will be equal to the filename of the custom page template.")])]),t._v(" "),a("tr",[a("td",[t._v("post_format")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("Bind the visibility of a metabox to a given post format. "),a("a",{attrs:{href:"http://codex.wordpress.org/Post_Formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("List of post formats"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("normal / advanced / side")]),t._v(" "),a("td",[t._v("Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.")])]),t._v(" "),a("tr",[a("td",[t._v("priority")]),t._v(" "),a("td",[t._v("high / core / default / low")]),t._v(" "),a("td",[t._v("Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.")])]),t._v(" "),a("tr",[a("td",[t._v("sections")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("Your sections array, the same style as ReduxFramework.")])])])]),t._v(" "),a("h2",{attrs:{id:"metaboxes-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metaboxes-api"}},[t._v("#")]),t._v(" Metaboxes API")]),t._v(" "),a("p",[t._v("To ease the use of Metaboxes, a metaboxes API has been implemented. Nearly all the methods match with the ones had in the\nstandard Redux API. However, with metaboxes there is an additional concept of a "),a("code",[t._v("box")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"example-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config"}},[t._v("#")]),t._v(" Example Config")]),t._v(" "),a("p",[t._v("Since we've kept the structure exactly the same, start by constructing a section array like you normally would. In the\nincluded config file for metaboxes, we save these to an array. We've named that array $boxSections for the below examples.")]),t._v(" "),a("p",[t._v("Now once we have that array, we need only add it to a parent array, named below as $metaboxes. Here's an example of how\nwe would add a sidebar metabox to a page.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BE SURE TO RENAME THE FUNCTION NAMES TO YOUR OWN NAME OR PREFIX")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("function_exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"redux_add_metaboxes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("redux_add_metaboxes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare your sections")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boxSections")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boxSections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'title'         => __('General Settings', 'redux-framework-demo'),")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'icon'          => 'el-icon-home', // Only used with metabox position normal or advanced")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'title' => __( 'Sidebar', 'redux-framework-demo' ),")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Please select the sidebar you would like to display on this page. Note: You must first create the sidebar under Appearance > Widgets.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'data'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebars'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare your metaboxes")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Sidebar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fusion-framework'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'post_types'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'page'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'acme_product'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'page_template' => array('page-test.php'), // Visibility of box based on page template selector")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'post_format' => array('image'), // Visibility of box based on post format")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'position'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'side'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// normal, advanced, side")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'priority'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'high'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// high, core, default, low - Priorities of placement")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sections'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boxSections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change {$redux_opt_name} to your opt_name")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"redux/metaboxes/'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_opt_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('/boxes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"redux_add_metaboxes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("This is one of the things that makes the metaboxes ultra slick. ReduxFramework creates a global variable for you to access all your panel options with. Say your opt_name is "),a("code",[t._v("redux_demo")]),t._v(", then you can use the global variable "),a("code",[t._v("$redux_demo")]),t._v(" to access your values. Now what's cool is the metaboxes code overrides those values! That means you only have to code your functions ONCE. So say you have a layout field in your panel and on your pages. If you change a single post, and have the layout be say 3, while the panel says 2, the code exposed to your data will be 3. Redux metaboxes does it all for you.")]),t._v(" "),a("h3",{attrs:{id:"accessing-data-within-loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-data-within-loops"}},[t._v("#")]),t._v(" Accessing Data Within Loops")]),t._v(" "),a("p",[t._v("Within loops, Redux will automatically update your Redux global variable with the appropriate values. If you're trying to do it another way, you will need to use the following function:")]),t._v(" "),a("p",[a("code",[t._v('php<br />$value = redux_post_meta( "OPT_NAME", "THE_POST", "META_KEY" )<br />')])]),t._v(" "),a("p",[t._v("You can use this anywhere to grab a specific value or all values. The "),a("code",[t._v("OPT_NAME")]),t._v(" and "),a("code",[t._v("THE_POST")]),t._v(" are the required attributes. "),a("code",[t._v("OPT_NAME")]),t._v(" is your Redux opt_name. "),a("code",[t._v("THE_POST")]),t._v(" can be a post object or just a post ID. If no "),a("code",[t._v("META_KEY")]),t._v(" is specified, an array of all meta will be returned. If you specify the "),a("code",[t._v("META_KEY")]),t._v(" only that value will be returned to you.")]),t._v(" "),a("h4",{attrs:{id:"help-the-defaults-are-not-in-the-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help-the-defaults-are-not-in-the-array"}},[t._v("#")]),t._v(" Help! The defaults are not in the array!")]),t._v(" "),a("p",[a("span",{staticStyle:{"text-decoration":"line-through"}},[t._v('You are correct. Redux Metaboxes will not ever store a "default" value. Know that when you query for values')]),t._v(". As of Metaboxes 1.4.4 you can set the global argument of "),a("code",[t._v("metaboxes_save_defaults")]),t._v(" to enable default values being saved to the database.")]),t._v(" "),a("h3",{attrs:{id:"missing-sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-sidebar"}},[t._v("#")]),t._v(" Missing Sidebar?!")]),t._v(" "),a("p",[t._v("For boxes in the "),a("code",[t._v("standard")]),t._v(" position and with only one section, the sidebar is omitted when the HTML is output. If you want a side bar, use at least two sections within any given standard position metabox.")]),t._v(" "),a("h3",{attrs:{id:"binding-metabox-visibility-to-page-template-post-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-metabox-visibility-to-page-template-post-formats"}},[t._v("#")]),t._v(" Binding Metabox Visibility to Page Template & Post Formats")]),t._v(" "),a("p",[t._v("Yes, metaboxes does that for you too. As denoted above, you need only declare "),a("code",[t._v("page_template")]),t._v(" or "),a("code",[t._v("post_format")]),t._v(" on the box array for a given metabox. The visibility will be affected accordingly. You can provide an array for each. Obviously, page_templates won't affect a box that only appears on the post type. 😉")]),t._v(" "),a("p",[t._v("For a full list of post formats see "),a("a",{attrs:{target:"_blank"}},[t._v("http://codex.wordpress.org/Post_Formats")]),t._v(".")]),t._v(" "),a("p",[t._v("The value of your page_template will be the actual filename of your given template.")]),t._v(" "),a("h3",{attrs:{id:"how-are-the-redux-metabox-values-stored"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-the-redux-metabox-values-stored"}},[t._v("#")]),t._v(" How are the Redux Metabox Values Stored?")]),t._v(" "),a("p",[t._v("Redux Metaboxes (as of "),a("em",[t._v("1.2.3")]),t._v(") stores each value as it's own key in the meta. In this way, you can query against specific meta values. If a value is default, it deletes that value to free up the database.")]),t._v(" "),a("h5",{attrs:{id:"wait-wasn-t-the-meta-all-stored-in-one-key-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-wasn-t-the-meta-all-stored-in-one-key-value"}},[t._v("#")]),t._v(" Wait, wasn't the meta all stored in one key value?")]),t._v(" "),a("p",[t._v("Yes, until recently. Don't worry, if such a key still exists your data will be automatically migrated the moment that post's meta is accessed.")])])}),[],!1,null,null,null);e.default=n.exports}}]);