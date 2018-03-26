# CodeLou_FrontEnd



## Description
As part of the graduation requirements for Code Louisville's Front End Web Development (FEWD) track, completion of a project* is required.  For my project, I elected to create a professional website, which will serve to market my skills and provide a platform to showcase future projects. The project will be built using a "mobile first" design philosophy and will feature HTML, CSS, & JavaScript.

AS OF 3/25/2018, THIS WEBSITE IS STILL IN DEVELOPMENT AND IS NOT REPRESENTATIVE OF THE FINAL PRODUCT, ALTHOUGH THE REQUIREMENTS FOR CODE LOUISVILLE'S GRADING RUBRIC HAVE BEEN SATISFIED.

* https://github.com/CodeLouisville/Student-Resources/wiki/Front-End-Web-Development-Project-Requirements



## Custom CSS Classes & ID Selectors
The classes and ID selectors that I created are:

1. Class name: .navBar
    a. Purpose: For viewports 769px+ wide, the header background turns to my preferred styling, grey, instead of black (because laptop screens typically require less contrast than a smartphone screen may due to sunlight exposure and brightness turned down due to privacy or battery life concerns). Also,padding is added to space the header's top-bottom out 1em and the header's left-right out 1.5em.

2. Class name: .wrapper
    a. Purpose: The wrapper contains all of the navigational items that can be used on various viewport widths, allowing me to manipulate all navigational items easily simply by manipulating said navigational items' container. For viewports <768px wide, the wrapper centers the menu items to enhance readability on the narrow viewport by using the "margin: 0 auto" rule to center, adding some padding for better aesthetics, and displays the menu items in a vertically stacked block-level format. For viewports 769px+ wide, the wrapper shows RESPONSIVE WEB DESIGN techniques in action as the wrapper class behaves in a totally different fashion for wider viewports than it does for narrow (smartphone style) viewports; for example, the wrapper uses flexbox to display the title and navigational links horizontally (in a row) and spaces the title and navigational links out using the "justify-content: space-between" rule. (Later, the .menuOptions class has the same rules called on it to space the navigational link items out, not just the box containing said link items, equally.)

3. Class name: .title
    a. Purpose: For viewports <768px wide, nav h1 has a font-size of 1.3em.  This looks great on mobile viewports but for viewports greater than 769px, there is an obvious discrepancy in font-size between .title (nav h1) and .menuOptions (nav ul). Within media queries, the title rule exists to solve this discrepancy by adjusting the font-size to 1.25 em.

4. ID name: #hidden-checkbox
    a. Purpose: This is a powerful tool that drives the navigational menu for narrow (smartphone) viewports. I could have used JavaScript to perform this function but chose not to as many browsers block JavaScript, in which case a very important navigational menu driven by JavaScript would not function (unacceptable). In keeping with the principles of unobtrusive JavaScript, I have used HTML and CSS only for my navigational menu. The #hidden-checkbox, when checked, works to display .menuOptions on 100% of the viewport. This tool maximizes content on narrow viewports until menu items need to be revealed, at which point the focus shifts to the menu items.

There are more classes within the css/main.css file but the above section serves to demonstrate competency in using custom CSS classes and ID selectors.



## Custom JavaScript Functions
The JavaScript functions I created are:

1. Function name: "normalizeFailsafe()" (within js/CDNfailsafe.js)
    Purpose: During the early stages of development, I had an issue that I struggled with for over 24 hours because my normalize.css CDN, which is imported within index.html, failed. This inspired me to implement a failsafe so that the issue does not occur again. If the CDN fails, JavaScript sources normalize.css from a local file that contains normalize.css (css/normalize_v8.0.0).  I still want to use a CDN primarily, however, as I have learned that CDNs lend themselves to faster webpage loading. The failsafe is just a "Plan B" contingency plan for when the CDN fails, which as I understand it happens rarely, but when it does can make my webpage display improperly. To test that this works, simply sabotage any letter in the CDN for normalize as seen within HTML, reload the page, and view the console. You will see:

        index.html:16 GET https://dnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css net::ERR_NAME_NOT_RESOLVED
        index.html:1 Normalize CDN failed but local backup of normalize loaded.

    The local last line logged to the console comes from the normalizeFailsafe() function and serves as verification that the fix worked.  Later, this same JS file will be fleshed out to provide redundancy in case of other CSS failures.

2. Function name: "$('#content').hide().fadeIn(2000);"
    Purpose: Within index.html, you'll notice:
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/app.js" type="text/javascript" charset="utf-8"></script>
    The app.js file houses jQuery code. In just one line, I was able to fade in all content. This exemplifies jQuery's motto: "Write less. Do more!" Also, this supports the principle of unobtrusive JavaScript, as if for some reason app.js was blocked, the content would sitll show, although it would show in a less fancy manner.

Later, I intend to add more JavaScript to provide functions that only JavaScript can perform, like proofreading a form before allowing submission within the "Business Inquiries" section and importing Treehouse achievements into the "Credibility" section.



## Acknowledgements
I would like to take this opportunity to thank some folks who shared knowledge, making this project possible:

1. https://blog.christopherianmurphy.com/2016/01/responsive-pure-css-menu/ helped inspire a responsive mobile-first menu that was intentionally free of JavaScript (as core features should not depend upon JavaScript per the "unobtrusive JavaScript" principle).


## Lessons Learned
1. Patience in troubleshooting and due diligence in testing your website on actual devices -- not just relying on Chrome/Firefox's emulations of mobile devices, for example -- is so necessary.  For a great, actual example of me going through the process, see: https://teamtreehouse.com/community/entire-page-content-shifting-to-right-unsure-why