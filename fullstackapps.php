<?php require_once("init.php"); ?>

<h1>Cross-platform apps</h1>
<div class="IntroImageWrapper">
	<img src="images/SpencerAppSquareImage.png" class="IntroImage" />
</div>
<p>Over the summer of 2020, I worked at Spencer Manufacturing, Inc., a custom firetruck manufacturer. They challenged me to create a piece of software that would:</p>
<ul>
	<li>Replace their existing timekeeping solution, which was expensive and didn't provide enough detailed insight</li>
	<li>Replace their existing group chat solution, which was poorly suited for per-project communication</li>
	<li>Create a coherent and integrated system for issue tracking on each project</li>
	<li>Provide custom analyses to answer questions such as "which parts of what projects take us longer than expected?"</li>
</ul>
<p>So I built an app, "Truck Manager", that does all of this and more.
	Truck Manager is a cross-platform app built with React Native and Expo. This means that it deploys to iOS, Android, and even web browsers. The backend is written in PHP, and is built on a MySQL database.</p>
<h2 class="SectionHeader">Truck Manager Features</h2>
<p>In Truck Manager, each project (or "truck") is listed on the home page. And each truck has its own task list, chat room, and issue tracker.
	Each task in the task list can be clocked into, or have an issue reported on it. Supervisors can also mark tasks as completed, which removes them from the list.</p>
<p>Every element of a truck is integrated with one another, which means that reporting an issue on a task:</p>
<ul>
	<li>adds that task to the issue tracker, and</li>
	<li>sends an alert in the chat room, which</li>
	<li>sends a push notification to anyone subscribed to that truck.</li>
</ul>
<p>A more complete set of features includes:</p>
<ul>
	<li>User login via email and password, or via four-digit PIN if the device is a registered company tablet</li>
	<li>Accounts that can be one of three different roles (Employee, Supervisor, and Administrator), the latter roles providing more permissions</li>
	<li>Image upload functionality for chat rooms and for issue tracking</li>
	<li>Tracking of unread chat messages for each individual truck</li>
	<li>"Add Truck" menu that allows a truck to be created simply by uploading a .csv file</li>
	<li>Restricted "People" menu that allows administrators to: <ul>
			<li>Add, edit, and remove employees</li>
			<li>View and edit employee timesheets by week</li>
			<li>Export a spreadsheet of hours that can be imported by QuickBooks</li>
		</ul>
	</li>
	<li>"Announcement" system that notifies all employees, and forces them to acknowledge the announcement before using the app</li>
	<li>Shared Calendar system that allows tracking of events such as project deadlines and truck delivery dates</li>
	<li>Restricted "analysis" window that describes which tasks took longer or shorter times than expected to complete, and breaks down who worked for how long on them</li>
</ul>
<?php require_once("footer.php"); ?>