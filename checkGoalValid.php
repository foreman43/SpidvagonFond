<?php 
	if(isset($_POST['designGoal']))
	{
		$goal = $_POST['designGoal'];
		$description = $_POST['designDescription'];
		$summ = $_POST['designProgress'];
		$requisites = $_POST['designRequisites'];

		if($summ > 0)
		{
			$sql = "SELECT goal, description FROM goals WHERE goal = '" . $goal . "' AND description = '" . $description . "'";
			$result = $conn->query($sql);
			if($result->num_rows == 0)
			{
				$sql = "SELECT id FROM users WHERE login = '". $_SESSION['userName'] ."'";
				$us = $conn->query($sql);
				$row = $us->fetch_assoc();
				$sql = "INSERT INTO `goals`(`id`, `goal`, `description`, `currentSum`, `goalSum`, `isOpen`, `owner`, `cardnumber`) VALUES (NULL, '". $goal ."', '". $description ."', ". 0 .", ". $summ .", ". 0 .", ". $row['id'] .", '". $requisites ."');";
				$conn->query($sql);
			}
			else
			{
				?>
				<p>Ошибка: Сбор уже существует.</p>
				<?php
			}
		}
		else
		{
			?>
			<p>Ошибка: Сумма сбора должна быть больше нуля.</p>
			<?php
		}
	}
?>