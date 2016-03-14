---
layout: single
title: Undisclosed
permalink: /portfolio/undisclosed-2/
custom_name: undisclosed-2
category: portfolio
---

Developed and designed at <a href="https://candidsky.com">Candidsky</a>.

This website is still in the build phase and is not finalised therefore I cannot reveal too much about any of the project in order to avoid undermining any marketing efforts or providing any opportunities to competitors.

<strong>Note:</strong> So as to not reveal any branding I have changed the colour scheme in any screenshots, hence the awful grey and yellow.

<figure class="portfolio__figure portfolio__figure--screenshot">
	<img src="{{ site-url }}/images/screenshots/undisclosed-2/undisclosed2.png" data-gif="{{ site-url }}/images/screen-gifs/undisclosed-2/order-process.gif">
	<button class="portfolio__figure__gif-trigger">View GIF (393 KB)</button>
	<figcaption>The order process.</figcaption>
</figure>

<h2>My contributions</h2>

<div class="portfolio__skill">
	<h3 class="portfolio__subheading" id="javascript">Javascript</h3>
	<p>This project required a step by step order process where the user could build up an order by specifying details about it. They would firstly enter their postcode to see if they were in an accepted area, then they would choose some predefined options about their order, then they would be able to choose a collection and delivery date and timeslot before finally being able to review and confirm the order.</p>
	<p>I worked on this project with a colleague more experienced in Javascript who was tasked with the development of the order process, however due to workload I ended up helping out with some aspects of it. I assisted in 3 main tasks; 
		<ul>
			<li>General additions and changes to the code to aid the work I was doing in styling and user experience. This including things like calling functions, adding interactions such as loader animations, editing code so that the order process flowed as I needed it to and making refinements to functions that had bugs.</li>
			<li>Adding a disabled days functionality to the collection and delivery datepicker. This was so that bank holidays could be excluded from the available dates.</li>
			<li>Creating a function to handle the functionality of the process steps to allow the user to go back to a chosen step in the process.</li>
		</ul> 
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/undisclosed-2/general-js.png">
		<figcaption>Javascript that checks the current status of the process and removes a loader animation upon failure so that the button can be used again.</figcaption>
	</figure>
	<p>To create the disabled days functionality I found and downloaded a list of bank holidays in the UK extending until 2020 and saved them in an array. Using the jQuery datepicker "beforeShowDay" method I then had to format the date object in Javascript in order to be able to compare the days on the datepicker with the disabled dates as these were not in an identical format.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/undisclosed-2/formatdates.png">
		<figcaption>Code to format the date.</figcaption>
	</figure>
	<p>After the dates were formatted and identical I then wrote an if statement in order for the function to return a required array. This if statement checked if the date on the datepicker was equal to any date in the disabled dates array. If it was, it returned an array of false to indicate the date was disabled, a CSS class so that the disabled date could be styled and finally some text for a popup tooltip. If the date wasn't equal to any of the disabled dates, the array simply returned true with no CSS class or tooltip.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/undisclosed-2/checkdates.png">
		<figcaption>Code to check the date against disabled dates.</figcaption>
	</figure>
	<p>For the steps functionality I had to write a function that fired whenever the user clicked (or tapped) a numbered step. The function accepts 3 parameters, the next step in the process, the current step, and the event that fired it. It checks what the desired step number is and makes sure the step isn't disabled, meaning the user isn't jumping forward. It then shows the desired step, adds an active class to the new current step number, and adds a disabled class to any steps number that is greater than the current one, again to stop the user from jumping forward. This is because there is validation on each step therefore making jumping forward unfeasible.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/undisclosed-2/steps.png">
		<figcaption>Part of the steps function. This section of code is showing the desired step and adding/disabling active classes on the step numbers.</figcaption>
	</figure>
	<p>If the user has simply used the next button to go forward in the process instead of the step numbers, I still needed to write some code in order to make the step numbers update along with the order process. To do this, the step handler function is fired every time the next button is clicked and if the event that fired the function wasn't a click then the code to be used when progressing via the next button is fired. The code takes the next step and current step at the time the next button was pressed and disables the current step (which becomes the previous step) and makes the next step (which becomes the current step) active.</p>
	<figure class="portfolio__figure portfolio__figure--screenshot">
		<img class="portfolio__screenshot" src="{{ site-url }}/images/screenshots/undisclosed-2/steps-2.png">
		<figcaption>Part of the steps function. This section of code is showing a check for usage of the next button in order to disable and active step numbers.</figcaption>
	</figure>
</div><!--/.portfolio__skill -->

<div class="portfolio__skill">
	<h3 class="portfolio__subheading">CSS / SASS and PHP</h3>
	<p>I took the lead on developing the CSS / SASS and PHP templates for this project. This involved adhering to brand guidelines in order to create the styles and the usage of a base Wordpress template to help with the speed of the templating. My role in these areas was similar to that on other projects and there won't be detailed on this page.</p>
</div><!--/.portfolio__skill -->