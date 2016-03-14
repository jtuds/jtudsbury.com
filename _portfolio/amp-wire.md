---
layout: single
title: AMP Wire
permalink: /portfolio/amp-wire/
custom_name: amp-wire
category: portfolio
---

Built and designed at <a href="https://candidsky.com">Candidsky</a>. Go to <a href="http://ampwire.co.uk">AMP Wire</a>.

AMP Wire is a wire work company, operating for over 20 years. They produce both off the shelf and bespoke products, ranging from safety lockers to heating guards.

The requirement was a unique one. The client wanted to primarily showcase their bespoke services and direct users to enquire about a custom product. However it was also important to allow the user to purchase products directly off the website if they wanted to, though this was a lower priority part of the business. The challenge was to balance a lead generation site with an ecommerce one to increase bespoke orders but to not lose express (ecommerce) orders.

The website also needed the option to order products as is or to customise them, aswell as a trade section where products were priced differently.

<figure class="portfolio__figure portfolio__figure--screenshot">
	<img src="{{ site-url }}/images/screenshots/ampwire/homepage.jpg" data-gif="{{ site-url }}/images/screen-gifs/ampwire/ampwire.gif">
	<button class="portfolio__figure__gif-trigger">View GIF (724 KB)</button>
	<figcaption>The AMP Wire front end.</figcaption>
</figure>

<h2>My contributions</h2>

<div class="portfolio__skill">
	<h3 class="portfolio__subheading">CSS / SASS</h3>
	<p>I worked with a designer on this project to write the SASS to style the frontend in line with designs and mockups. As this was my first Woocommerce project where I was the frontend lead, the main challenge came from how I managed, structured and styled Woocommerce elements. At the time I approached this by containing all of the Woocommerce elements in their own SASS file, however I have since changed tact and give each area of Woocommerce (e.g. checkout, account, basket etc) its own file. This is so that specific elements can be targeted where the markup produced by Woocommerce files is quite difficult to work with.</p>
</div><!--/.portfolio__skill -->

<div class="portfolio__skill">
	<h3 class="portfolio__subheading" id="design">UX and structural design</h3>
	<p>Throughout the design stage and in to the build stage I was involved in the UX and structural design of the site in the capacity of team discussions and the creation of mockups. The site had a couple of uncommon problems to solve, the first of which was how to balance the lead generation and ecommerce areas of the site in order to drive users to the most effective actions. The second was how to, on one single product page, prompt the user to choose mandatory options whilst giving them the ability to also add optional extras for an extra cost and how to communicate that effectively.</p>
	<p>The solution that I proposed and that we decided upon for the first problem was to introduce an intermediary page in the user journey between the user entry point and the ecommerce section. Whilst most ecommerce sites would lead their users to the shop categories and products straight away, we decided to lead them first to a page that provided information about the selected product category and prompted the user to contact the company about a bespoke product. After all, the main aim of the site was to increase leads for bespoke products. At this stage, the site could have quite easily been a lead generation site without an ecommerce area, however from this intermediary page we allowed the user to continue on the path to an ecommerce section if that was the option they preferred over making an enquiry. My logic for this design was that if we presented the user with all the information they needed about the product to make an enquiry, but they didn't do so, then for at least a portion of the users buying from the ecommerce section would satisfy their goals.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/ampwire/ampwire-journey-1.png">
		<figcaption>A mockup of the user journey showing the journey from the homepage, to a page intended to prompt an enquiry, and finally to an ecommerce page.</figcaption>
	</figure>
	<p>For the second problem I proposed that we use a popup modal on the product page when the user selected their product type. With this I wanted the user to know that they had entered a different part of the order process, but still associate it with the product they were ordering. For this I felt that the layout and wording of the modal was important. The product that the user had chosen would be repeated in the modal and they would be presented with some options which they had to choose from. The user would then have the option of either clicking a button for more options, which would reveal extras and information about the additional cost of those extras or simply completing the order with a buy button. This solution was proposed to the client and was the solution that was settled on for a period before it was changed on client request, but still based on the initial solution.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/ampwire/ampwire-popup.png">
		<figcaption>A mockup showing the layout and wording of the product popup modal.</figcaption>
	</figure>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screen-gifs/ampwire/popup.gif">
		<figcaption>The pop up in action.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->

<div class="portfolio__skill">
	<h3 class="portfolio__subheading">PHP and Javascript</h3>
	<p>Though the project required some careful forethought in terms of structure, the actual implementation of PHP was fairly straightforward and similar to my work on other projects. This consisted of using Wordpress and Woocommerce functionality to build templates, along with some basic helper functions. The majority of custom backend work required was implemented by a backend developer I worked with.</p>
	<p>Similarly with Javascript, there was some requirement for me to implement plugins and a responsive menu, but no particularly notable Javascript functionality was needed.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/ampwire/panel-php.png">
		<figcaption>An example of a custom field output checking for content type and storing HTML information in variables to use to output on the frontend.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->