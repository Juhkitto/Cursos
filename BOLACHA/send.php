<?php 

	$link = $_GET['url'];
	$title = $_GETT['title'];

	$db = @mysql_connect("localhost","root","") or die ("ocorreu um erro");
	@mysql_select_db("bd_oompa",$db) or die ("ocorreu um erro");
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER_SET utf8");
	


	$mandarDados = mysql_query("INSERT INTO site (link, title) VALUES ('$link','$title')");

?>