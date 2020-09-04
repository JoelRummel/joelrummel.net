<?php $page = basename($_SERVER["SCRIPT_FILENAME"], '.php'); ?>

<!DOCTYPE html>
<html>

<head>
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
			<a class="<?php echo ($page == "/" || $page == "index") ? "NavTabCurrent" : "NavTab" ?>" href="/">
				<h3>About</h3>
			</a>
			<a class="<?php echo ($page != "/" && $page != "index") ? "NavTabCurrent" : "NavTab" ?>" href="#">
				<h3>My Stuff</h3>
			</a>
			<a class="<?php echo ($page == "resume") ? "NavTabCurrent" : "NavTab" ?>" href="#">
				<h3>Resume</h3>
			</a>
		</div>
	</div>
	<div id="Content">