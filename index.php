<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link href="stylesheets/messageboard.css" rel="stylesheet" type="text/css" />
		<link href="stylesheets/jquery.contextMenu.css" rel="stylesheet" type="text/css" />
		<script src="scripts/jquery-1.8.1.min.js" type="text/javascript"></script>
		<script src="scripts/jquery-ui-1.8.23.custom.min.js" type="text/javascript"></script>
		<script src="scripts/store.js" type="text/javascript"></script>
		<script src="scripts/uuid.js" type="text/javascript"></script>
		<script src="scripts/jquery.ui.position.js" type="text/javascript"></script>
    	<script src="scripts/jquery.contextMenu.js" type="text/javascript"></script>
    
		<script src="scripts/messageboard.js" type="text/javascript"></script>
	</head>
	<body>
	<?php
		echo "test";
	?>
		<div id="inputpanel" align="left" class="shadowbox collapsibleContainer" >
			<form action="#">
				<textarea size="255" id="newnote" name="newnote" class="noteInput"></textarea>
				<br>
				<div align="center"><input type="button" id="btnAdd" name="btnAdd" value="Add Note" onClick="addNote();" /></div>
			</form>
		</div>
		<div width="80%" id="uxLayoutPinboard" class="pinBoard" />
	</body>
</html>
