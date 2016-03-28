---
client: MM
title: UIX - User Interface Controllers
summary: A JavaScript library for implementing ARIA standard widget interactions (mouse, keyboard, and touch) to any HTML structure without depending on or affecting style and layout.
startdate: 2015-01-01
enddate: 2015-06-01
website: http://github.com/manimejia/uix
role: Web Product Designer & Lead Developer
status: repository
publish:
 print: true
 featured: true
 draft: false 

tags:
- Accessibility
- JavaScript
- Widgets
- Library
- GitHub

thumbnail: uix-icon.jpg
assets: 
tasks: 
- Developed a dedicated library focused simply on implementing standards based UI controller logic.
- Can be utilized within any front-end CSS libraries, which are typically inconsistent in their implementation of ARIA standards.

---
I am developing this UIX Library to apply standards based widget interaction patterns on top of any HTML structure and to work seamlessly with any CSS framework. 

The WAI ARIA standards describe a set of keyboard and mouse interactions for controlling almost any user interface widget. Implementing these standards should be a simple matter of incorporating a dedicated "controller library" into your website or application. Such a dedicated controller library does not exist, until now. 

Usually, the control functionality for UI widgets is embedded into the same front-end CSS libraries that control presentation. These front-end libraries differ in how they implement the javascript controls. Many differ in their compliance to the ARIA standards which prescribe the patterns for these interactions. Most do not follow the standards at all, and leave keyboard (and other accessible device) users helpless to navigate the content in their widgets.

Most front-end libraries are not configurable in how they implement their UI controls, leaving website designers and developers powerless to craft unique user experiences or fine tune their ARIA compliance without hiring a team of JS and accessibility experts. Let's face it... the same old tabs, accordions, and drop down menus are getting old, but the "logic" that powers them will be usable for decades. Designers need the freedom to tweak their HTML5 applications, without having to re-invent the UI control layer every time.

The User Interface Controller (UIX) Widget Library is (currently) a collection of jQuery UI factory widgets that can be applied to any front end framework to provide display control of the underlying HTML elements (via ARIA standard mouse, keyboard, and touch interactions) without affecting the style or structure of the rendered output.
