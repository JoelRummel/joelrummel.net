<?php $page = basename($_SERVER["SCRIPT_FILENAME"], '.php'); ?>

<!DOCTYPE html>
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@200&family=Source+Sans+Pro&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css" />
</head>

<body>

	<div id="Header">
		<img src="images/HeadshotCropped.jpg" id="Headshot" />
		<a href="/" style="text-decoration: none">
			<h2>Joel Rummel</h2>
		</a>
		<div id="NavBar">
			<a class="<?php echo ($page == "/" || $page == "index" || $page == "") ? "NavTabCurrent" : "NavTab" ?>" href="/">
				<h3>About</h3>
			</a>
			<div class="NavDropdownWrapper <?php echo ($page == "robotics" || $page == "videogames" || $page == "fullstackapps" || $page == "dataanalysis") ? "NavTabCurrent" : "NavTab" ?>">
				<a class="NavTabCurrent" href="#" style="margin-left: 0px;">
					<h3>My Stuff</h3>
				</a>
				<div class="NavDropdown">
					<a class="<?php echo ($page == "fullstackapps") ? "NavTabCurrent" : "NavTab" ?>" href="fullstackapps.php">
						<h3>Cross Platform Apps</h3>
					</a>
					<a class="<?php echo ($page == "robotics") ? "NavTabCurrent" : "NavTab" ?>" href="robotics.php">
						<h3>Robotics</h3>
					</a>
					<a class="<?php echo ($page == "dataanalysis") ? "NavTabCurrent" : "NavTab" ?>" href="dataanalysis.php">
						<h3>Data Analysis Tools</h3>
					</a>
					<a class="<?php echo ($page == "videogames") ? "NavTabCurrent" : "NavTab" ?>" href="videogames.php">
						<h3>Video Games</h3>
					</a>
				</div>
			</div>
			<a class="<?php echo ($page == "resume") ? "NavTabCurrent" : "NavTab" ?>" href="JoelRummelResumeFall2020.pdf">
				<h3>Resume</h3>
			</a>
		</div>
	</div>
	<div id="Content">