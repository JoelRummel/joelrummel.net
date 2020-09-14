<?php require_once("init.php"); ?>

<style>
	ul li {
		margin-left: 0px;
	}
</style>

<div id="LandingHeader">
	<h1>Hi, I'm Joel Rummel.</h1>
	<p>I'm a Junior studying Computer Science at the University of Michigan. From developing web and mobile apps, to video games,
		to autonomous robots, I've accumulated a wide range of programming experience. Take a look at some of my personal
		and professional projects.</p>
</div>
<div id="FourSquares">
	<a href="fullstackapps.php" class="Square" id="FullStackAppsSquare">
		<h2 class="SquareHeader">Cross-Platform Applications</h2>
		<p class="SquareBody">Over the 2020 summer, I interned at Spencer Manufacturing Inc. as a full-stack software
			developer. I created a cross-platform app that integrated project management with timekeeping, instant
			messaging, issue tracking, and more. The app was custom-built for private use throughout the company.</p>
	</a>
	<a href="robotics.php" id="RoboticsSquare" class="Square">
		<h2 class="SquareHeader">Robotics</h2>
		<p class="SquareBody">Making a robot move on its own is easy enough, but making it move in a perfectly straight
			line certainly isn't. In high school, I served as the lead programmer of our FRC robotics team, programming
			sensor-based autonomous routines for robots built on omnidirectional drive bases.</p>
	</a>
	<a href="dataanalysis.php" id="DataAnalysisSquare" class="Square">
		<h2 class="SquareHeader">Data Analysis Tools</h2>
		<p class="SquareBody">While I was a member of my high school's robotics team, I wrote software that interacted
			with an API to "scout" our opponents and analyze their strengths and weaknesses. This program landed me my
			first internship at Whirlpool, where I helped develop several data analysis tools for quality analysts and
			engineers.
		</p>
	</a>
	<a href="videogames.php" id="VideoGamesSquare" class="Square">
		<h2 class="SquareHeader">Video Games</h2>
		<p class="SquareBody">In collaboration with my brother Alex, I've
			participated in a number of competitive "game jams", where participants must develop a video game in a very
			short time span. Our latest two games, "Liquid Bacon" and "The Empty Cone", earned especially high marks - the
			former game earning 1st place out of over 25 entries!</p>
	</a>
</div>
<div id="BlurbsSection">
	<div class="BlurbBox">
		<h2 class="SectionHeader">No language or framework too big.</h2>
		<p class="BlurbBody">I strongly believe that it is important for a programmer to be flexible, in order to be able
			to use the best tools for the job. In each year of my internships, I have been able to quickly pick up a
			new framework or technology in order to most efficiently tackle the issue at hand.</p>
	</div>
	<div class="BlurbBox">
		<h2 class="SectionHeader">Experienced in all the best ways.</h2>
		<p class="BlurbBody">I've spent several years working as a part of different fast-paced teams, but I also thrive in
			autonomous environments with few specific directives. Whether the job is about a small part of a huge program or
			if it's about tackling a project solo, you can rest assured that I'll be a positive contributor.</p>
	</div>
	<div class="BlurbBox">
		<h2 class="SectionHeader">Communication? Not a problem.</h2>
		<p class="BlurbBody">I have developed strong communication and collaboration skills through my years of teamwork
			and professional experience in both high school and college. I have even been entrusted by each of the
			companies that I've worked for to continue my work for them remotely during the school year.</p>
	</div>
</div>
<h1>Interesting facts</h1>
<ul>
	<li>This website is being hosted by a remote Ubuntu server that I configured from scratch</li>
	<li>Each year since high school I've mentored high school robotics students, helping them learn to write code for robots</li>
	<li>I played varsity tennis in high school and I continue to play it in college - I can even string rackets!</li>
</ul>

<?php require_once("footer.php"); ?>