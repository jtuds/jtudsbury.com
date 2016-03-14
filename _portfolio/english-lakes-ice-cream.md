---
layout: single
title: English Lakes Ice Cream
permalink: /portfolio/english-lakes-ice-cream/
custom_name: english-lakes-ice-cream
category: portfolio
---

Built and designed at <a href="https://candidsky.com">Candidsky</a>. Go to <a href="http://lakesicecream.com">English Lakes Ice Cream</a>.

English Lakes Ice Cream is a luxury ice cream retailer based in the Lake District. They have stores across the region and a strong brand identity.

The requirement was to build a website that showcased both the English Lakes brand and the products that they offer with the aim of increasing sales to retailers and increasing awareness of the brand. We wanted to portray the brand as luxurious, traditional and high quality.

The website consisted of a products area, giving each product it's own page, a stockists page displaying where stockists of the ice cream were, and other templates used for contact information etc.

<figure class="portfolio__figure portfolio__figure--screenshot">
	<img src="{{ site-url }}/images/screenshots/englishlakes/homepage.jpg" data-gif="{{ site-url }}/images/screen-gifs/englishlakes/englishlakes.gif">
	<button class="portfolio__figure__gif-trigger">View GIF (860 KB)</button>
	<figcaption>The English Lakes front end.</figcaption>
</figure>

<h2>My contributions</h2>

<div class="portfolio__skill">
	<h3 class="portfolio__subheading">CSS / SASS</h3>
	<p>My key responsibility for this project was to write the CSS using SASS to style the site in line with designs provided by a designer whom I worked alongside with. I used a style derived from the BEM methodology and as a main aim of this site was to make a high visual impact we decided to use some fun to implement CSS features and techniques that would be more readily avoided on other projects. Some of the techniques used included; viewport units to determine the height of the hero image with the aim of it taking up the full viewport (minus the navigation) on the homepage, text fills, gradients and animation for link hover effects, transforms for hover effects, and CSS columns.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/text-gradient.png">
		<figcaption>A sample of SASS taken from the project showing the use of text fill, gradients and animation used for navigation link hover effects.</figcaption>
	</figure>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/banner.png">
		<figcaption>The banners of the site were determined by viewport units and the CSS calc function with fallbacks for both.</figcaption>
	</figure>
	<p>I also focused on class naming in order to make the components of the site reusable aswell as readable for myself and future developers. For example, using the [attribute*=value] selector to apply a set of background colours to any element, a technique I use on most projects</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/panels.png">
		<figcaption>An example of the [attribute*=value] selector used to apply a set of style to any element with "--background-secondary" appended to it.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->

<div class="portfolio__skill">
	<h3 class="portfolio__subheading">PHP</h3>
	<p>I was responsible for all of the PHP on the site. The main requirement for PHP on this project was for the templating aspect, that mainly being the usage of Wordpress functionality extended with Advanced Custom Fields, and the occasional custom code.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/table-php.png">
		<figcaption>An example of using Advanced Custom Fields flexible fields to output a table.</figcaption>
	</figure>
	<p>One of the PHP related challenges I found on this project was the way the navigation menu was split in to two columns, with a logo in the middle. From a styling point of view, this was fairly easy thing to achieve, however as the menu had to be editable via the site admin panel, the menu had to be programatically output in order to create the structure required for the CSS. As a frontend developer by trade, this was a particularly interesting and fun challenge. I solved it in the following steps; getting the navigation items; counting them, dividing the count by 2 for an even split, and using the divided number to slice the array containing all of the navigation items and add them to two separate arrays ready to be output in to the relevant elements (divs in this case).</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/nav-php.png">
		<figcaption>The first part of the code written to output a split menu.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->

<div class="portfolio__skill">
	<h3 class="portfolio__subheading">Javascript</h3>
	<p>The majority of Javascript required for this project was initiation of plugins and some basic functionality for a responsive menu. However there was some more complex custom functionality. The site used the plugin <a href="http://isotope.metafizzy.co/">Isotope</a> to filter products on the product page based on category. These categories were filterable via a filter bar and I wrote some code in order for these filters to work both on click and via the user coming from another page, i.e. linking to a category.</p>
	<p>The linking functionality was achieved by appending the URL with a hash and on initiation of the plugin, checking the URL for the presence of a hash and filtering the products based on that value. The products were output in the template with class names containing their filter values, it was these values that were  matched in the URL  and checked via Javascript to allow filtering.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/hash-filter-js.png">
		<figcaption>Code checking for a URL hash, storing the hash value and applying a filter based on that value.</figcaption>
	</figure>
	<p>A similar approach was used to check for a user click on a filter option, identifying the value of the option via data attributes and filtering accordingly.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/click-filter-js.png">
		<figcaption>Code checking for a user click on a filter bar, storing a data attribute value based on the clicked option and applying a filter based on that value.</figcaption>
	</figure>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/filter.gif">
		<figcaption>The filter in action.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->

<div class="portfolio__skill">
	<h3 class="portfolio__subheading" id="cms">CMS</h3>
	<p>The client requested the ability to control both the content and the appearance of the site. To achieve this, the CMS was built with the common ability to edit content but also with options to apply certain styles from a defined set. For example the user could choose whether to show a content panel, upon choosing yes they would then be presented with more options; the ability to add and edit a header and text area, and to choose the background colour of the panel which would determine the foreground colours of the header and text. This gave the client the ability to control not just the content, but where the content appeared and how it appeared.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/englishlakes/admin-panel.png">
		<figcaption>An example of the admin panel. This example shows a custom panel being built with a call to action and user selected colours.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->