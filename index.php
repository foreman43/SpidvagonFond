<?php include 'dataBase.php' ?>
<html lang="en">
<head>
	<script src="GoalsCreation.js"></script>
	<script src="PaymentMenu.js"></script>
	<script src="RegisterSkripts.js"></script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="Style.css">
	<title>Фонд Спидвагона</title>
</head>

<body>

	<div class="Shadow" id="RegisterMenu" style="display: none">
		<div class="RegisterMenuBox">
			<?php
				if(!isset($_SESSION['userName']))
					include "registerMenu.php";
				else
					include "profilMenu.php";
			?>
			<a class="LowFunctionButton" onclick="CreateMenu()"><button>Закрыть</button></a>
		</div>
	</div>

	<!-- Шапка -->	
	<header>
		<img class="logo" src="hat.png">
		<nav>
			<ul class="navlinks">
				<li><a href = "#Ggoal">Список сборов</a></li>
				<li><a href = "#pay">Оплата</a></li>
				<li><a>Статистика</a></li>
			</ul>
		</nav>
		<a onclick="CreateMenu()">
			<?php 
			if(!isset($_SESSION['userName']))
			{
				echo "<button>Регистрация и авторизация</button>";
			}
			else
			{
				echo "<button>". $_SESSION['userName'] ."</button>";
			}
			?>
		</a>
	</header>

	<div class="MainCase">
		<!-- Блок с целями сбора -->
		<div class="GoalCase" id="GoalsCase"><a name="Ggoal"></a>
		<h1>Выберите кому помочь:</h1>
		
		</div>

		<hr class="Separator" size="1px" noshade>
		<!-- Блок оплаты -->
		<div class="PaymentCase"><a name="pay"></a>
			<h1>Платите как удобно:</h1>
			<div class="PayMethodMenu">

			</div>
			<div class="PaymentFormCase">
				<form action="" method="post">
					<h1>Оплата</h1>
					<label for="PayGoal">Идентификатор сбора:</label><br>
					<input type="text" id="PayGoal" name="PayGoal" required><br>
					<label for="PayCardNumber">Номер карты:</label><br>
					<input type="text" id="PayCardNumber" name="PayCardNumber" required><br>
					<label for="PaySum">Размер платежа:</label><br>
					<input type="text" id="PaySum" name="PaySum" required><br>
					<input type="submit" name="" id="log"></input>
				</form>
				<?php include "checkPayValid.php" ?>
			</div>
		</div>

		<!-- Блок статистики -->
		<div class="StatsCase">

		</div>
	</div>

	<!-- Подвал сайта -->
	<div class="Footter">

	</div>
</body>
</html>