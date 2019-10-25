(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{460:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"the-section-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-section-object"}},[t._v("#")]),t._v(" The Section Object")]),t._v(" "),e("p",[t._v("The primary grouping of fields within Redux is called a "),e("code",[t._v("section")]),t._v(". Each section is unique and creates a grouping of all\nthe fields within it. A section contains a "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(" array and any number of "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(". A number of\nAPI methods are provided to set, manipulate, and remove sections before they are rendered to the user.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),e("li",[e("a",{attrs:{href:"#setting-section-s"}},[t._v("Setting Section(s)")]),e("ul",[e("li",[e("a",{attrs:{href:"#redux-setsection"}},[t._v("Redux::setSection()")])]),e("li",[e("a",{attrs:{href:"#redux-setsections"}},[t._v("Redux::setSections()")])])])]),e("li",[e("a",{attrs:{href:"#section-helper-functions"}},[t._v("Section Helper Functions")]),e("ul",[e("li",[e("a",{attrs:{href:"#redux-getsection"}},[t._v("Redux::getSection()")])]),e("li",[e("a",{attrs:{href:"#redux-get-sections"}},[t._v("Redux::get_sections()")])]),e("li",[e("a",{attrs:{href:"#redux-remove-section"}},[t._v("Redux::remove_section()")])])])])])]),e("p")]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description.")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The unique identifier of a section. If not provided, the "),e("code",[t._v("title")]),t._v(" field will be used to generate a unique identifier.")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The title of the section that will appear on the option tab.")])]),t._v(" "),e("tr",[e("td",[t._v("heading")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Text to appear at the top of the section page. By default the "),e("code",[t._v("title")]),t._v(" argument is used as the "),e("code",[t._v("heading")]),t._v(". This can be overriden by using this argument.")])]),t._v(" "),e("tr",[e("td",[t._v("desc")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Text to appear under the section title. HTML is permitted.")])]),t._v(" "),e("tr",[e("td",[t._v("class")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Appends any number of classes to the section’s class attribute.")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The icon to be displayed next to the section title. This could be a preset Elusive Icon or a URL to an icon of your own.")])]),t._v(" "),e("tr",[e("td",[t._v("icon_type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Set to "),e("code",[t._v("image")]),t._v(" when using a custom URL to an icon.")])]),t._v(" "),e("tr",[e("td",[t._v("permissions")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("String specifying the capability required to view the section.  See "),e("router-link",{attrs:{to:"/configuration/argument/permissions.html"}},[t._v("Using Permissions")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[t._v("fields")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("An array of "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(" arrays contained within this section.")],1)]),t._v(" "),e("tr",[e("td",[t._v("customizer_only")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("A flag to set all "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(" below this section to "),e("router-link",{attrs:{to:"/configuration/objects/field.html#customizer-only"}},[t._v("customizer_only")]),t._v(" display. This can be overriden at the "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(" level.")],1)]),t._v(" "),e("tr",[e("td",[t._v("subsection")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("Flag to denote if this section should appear as a subsection to the previously defined section.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("SEE ALSO")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("Fields")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/guides/basics/getting-started.html"}},[t._v("Getting Started with Redux")])],1)])]),t._v(" "),e("h2",{attrs:{id:"setting-section-s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-section-s"}},[t._v("#")]),t._v(" Setting Section(s)")]),t._v(" "),e("p",[t._v("There are two methods to set a section in Redux. The only difference between these two declarations is one is singular\nwhile the other is plural.")]),t._v(" "),e("h3",{attrs:{id:"redux-setsection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-setsection"}},[t._v("#")]),t._v(" Redux::setSection()")]),t._v(" "),e("p",[t._v("Used to declare a single section cotaining "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(".")],1),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("router-link",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[t._v("section")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("A singular section array")])]),t._v(" "),e("tr",[e("td",[t._v("replace")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("true")]),t._v(", any section with this same ID will be replaced. If "),e("code",[t._v("false")]),t._v(" (default), a varied section ID will be generated.")])])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'New Section'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'el-icon-cogs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'heading'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Expanded New Section Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<br />This is the section description.  HTML is permitted.<br />'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n           "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A sample text box'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"adding-a-section-with-the-same-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-section-with-the-same-id"}},[t._v("#")]),t._v(" Adding a section with the same ID")]),t._v(" "),e("p",[t._v("To reduce errors, if a section already exists with that ID, a new one will be generated to ensure a unique section ID.")]),t._v(" "),e("h4",{attrs:{id:"updating-an-existing-section"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-existing-section"}},[t._v("#")]),t._v(" Updating an existing section")]),t._v(" "),e("p",[t._v("If you wish, you can change the default behavior and replace an existing section by passing a new section array with a\nsame section_id, and then passing true for the replace variable. All data between the two sections will be merged. IE,\nyou can only update values this way. If you wish to remove values, you will need to use remove_section outlined below.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'New Section'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'el-icon-cogs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'heading'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Expanded New Section Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<br />This is the section description.  HTML is permitted.<br />'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n           "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A sample text box'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"redux-setsections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-setsections"}},[t._v("#")]),t._v(" Redux::setSections()")]),t._v(" "),e("p",[t._v("Similar to "),e("a",{attrs:{href:"#set-section"}},[t._v("::setSection()")]),t._v(", but used to set an unlimited number of sections containing "),e("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(" at once.")],1),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("router-link",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[t._v("sections")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("Array of section arrays")])])])]),t._v(" "),e("p",[t._v("This method allows for multiple sections to be added at once. Keep in mind that you can still set a single section, as\nseen below, but you should remember to wrap the section in an array.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'New Section'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'el-icon-cogs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'heading'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Expanded New Section Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<br />This is the section description.  HTML is permitted.<br />'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n               "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A sample text box'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"section-helper-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#section-helper-functions"}},[t._v("#")]),t._v(" Section Helper Functions")]),t._v(" "),e("p",[t._v("A number of helper functions have been baked into the Redux API to support modifying a section before it gets rendered.\nThese functions have specific use cases and are not often employed by the typical developer, but they are useful when\nneeded.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Execution order is important here. If you try to fetch a section before it has been called within your code, it will\nnot exist. If you believe a section should exist, make sure you're not in an early loading hook when working with that section.")])]),t._v(" "),e("h3",{attrs:{id:"redux-getsection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-getsection"}},[t._v("#")]),t._v(" Redux::getSection()")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("router-link",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("section_id")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Unique id of the section you wish to retrieve")])])])]),t._v(" "),e("p",[t._v("Say you want to fetch a section object, you can easily do that. This may be useful if you wanted to check the section\narray by ID. Returns "),e("code",[t._v("false")]),t._v(" if the section cannot be identified.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"redux-get-sections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-get-sections"}},[t._v("#")]),t._v(" Redux::get_sections()")]),t._v(" "),e("p",[t._v("Now let's say you want to grab all sections for a given opt_name, you can do that too.")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Your unique "),e("router-link",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sections")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"redux-remove-section"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux-remove-section"}},[t._v("#")]),t._v(" Redux::remove_section()")]),t._v(" "),e("p",[e("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("opt_name")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Your unique "),e("router-link",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("section_id")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Unique id of the section you wish to retrieve")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("delete_fields")])]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If set to true, all fields below will be deleted as well")])])])]),t._v(" "),e("p",[t._v("This method allows you to remove a section by ID from Redux. It can be useful to update a field as follows:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A New Section Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRedux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);