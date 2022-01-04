idFormat = 16;
window.onload=function()
{
	
}

function CreateGoal(goalId,head,description,currentSumm,fullSumm, vDocs, isAdmin)	//accept goal data and create appropriate div on page
{
	let header = document.createElement('h3');						//
	header.innerHTML = head;										//
	let headBox = document.createElement('div');					//create head of goal
	headBox.className = "HeadBox";									//
	headBox.appendChild(header);									//

	let descript = document.createElement('p');						//
	descript.innerHTML = description;								//
	let textBox = document.createElement('div');					//create description of goal
	textBox.className = "TextBox";									//
	textBox.appendChild(descript);									//

	let progressBar = document.createElement('div');				//create empty progress bar 
	progressBar.className = "ProgressBar";						
	let progress = document.createElement('div');					//create progress scale
	progress.className = "Progress";
	if (currentSumm/fullSumm <= 1)
		progress.style.width = (currentSumm/fullSumm)*100+"%";
	else
		progress.style.width =100+"%";
	if(progress.width > progressBar.width)							//check out of range
		progress.style.width = progressBar.style.width;

	let progressText = document.createElement('p');					//create number values of progress
	progressText.className = "ProgressText";
	progressText.innerHTML = currentSumm+"/"+fullSumm+" р";

	progressBar.appendChild(progress);								//put scale of progress at the progress bar
	progressBar.appendChild(progressText);							//put value of progress at the progress bar

	let toPay = document.createElement('a');
	//create pay button
	toPay.innerHTML = "Пожертвовать";
	toPay.href = "#pay";											//create link to pay box
	toPay.onclick = function()
	{
		document.getElementById('PayGoal').value = goalId;
	}

	let id = document.createElement('p');							//create box to goal id
	id.innerHTML = toGoalId(goalId);
	id.style.fontsize = "5pt";
	id.style.color = "#bababa";

	let goal = document.createElement('div');						//create goal box
	goal.className = "Goal";
	goal.appendChild(id);											//put id at the goal box
	goal.appendChild(headBox);										//put head at the goal box
	goal.appendChild(textBox);										//put description at the goal box
	goal.appendChild(progressBar);									//put progress bar at the goal box
	if(isAdmin==1)
	{
		let docsBox = document.createElement('div');
		docsBox.className = "DocsBox";
		let docsLink = document.createElement('a');
		docsLink.href = vDocs;
		docsLink.innerHTML = "Подтверждающие документы";
		docsBox.appendChild(docsLink);

		let verifyingBox = document.createElement('div');
		let verifyingButton = document.createElement('a');
		verifyingButton.href = "index.php?veryfide="+goalId;
		verifyingButton.innerHTML = "Подтвердить";
		verifyingBox.appendChild(verifyingButton);

		goal.appendChild(docsBox);
		goal.appendChild(verifyingBox);
	}
	goal.appendChild(toPay);										//put pay button at the goal box
	document.getElementById('GoalsCase').appendChild(goal);			//put goal box on page
}
function TogleAdminInfo(isAdmin)
{
	var Goals = document.getElementsByClassName('Goal');
	for(var i=0;i<Goals.length-1;i++)
	{
		if(isAdmin)
		{
			Goals.getElementsByClassName('DocsBox')[0].style.display = "block";
		}
		else
		{
			Goals.getElementsByClassName('DocsBox')[0].style.display = "none";
		}
	}	
}
function toGoalId(id)
{
	var variableId = id+"";
	for(var i=0;i<idFormat;i++)
	{
		if(variableId.length<idFormat)
			variableId="0"+variableId;
		else
			break;
	}
	return variableId;
}
function CreateDesigner()
{
	let form = document.createElement('form');
	form.method = "post";

	let header = document.createElement('input');
	header.maxLength = "50";
	header.id = "designGoal";
	header.name = "designGoal";
	let headBox = document.createElement('div');
	headBox.className = "HeadBox";
	headBox.appendChild(CreateLabel("На что вы собираете:"));
	headBox.appendChild(document.createElement('br'));
	headBox.appendChild(header);

	let descript = document.createElement('textarea');					
	descript.maxLength = "255";
	descript.cols = "40";
	descript.rows = "7";
	descript.id = "designDescription";
	descript.name = "designDescription";
	let textBox = document.createElement('div');					
	textBox.className = "TextBox";
	textBox.appendChild(CreateLabel("Опишите вашу ситуацию:"));
	textBox.appendChild(document.createElement('br'));
	textBox.appendChild(descript);

	let progress = document.createElement('input');
	progress.className = "ProgressBar";
	progress.maxLength = "10";
	progress.id = "designProgress";
	progress.name = "designProgress";
	let progressBox = document.createElement('div');
	progressBox.className = "TextBox";
	progressBox.appendChild(CreateLabel("Какая сумма необходима:"));
	progressBox.appendChild(document.createElement('br'));
	progressBox.appendChild(progress);

	let requisites = document.createElement('input');
	requisites.maxLength = "16";
	requisites.minLength = "16";
	requisites.id = "designRequisites";
	requisites.name = "designRequisites";
	let requisitesBox = document.createElement('div');
	requisitesBox.className = "TextBox";
	requisitesBox.appendChild(CreateLabel("Куда переводить деньги:"));
	requisitesBox.appendChild(document.createElement('br'));
	requisitesBox.appendChild(requisites);

	let docs = document.createElement('input');
	docs.id = "designDocuments";
	docs.name = "designDocuments";
	let documentsBox = document.createElement('div');
	documentsBox.className = "TextBox";
	documentsBox.appendChild(CreateLabel("Приложите ссылку на скачивание подтверждающих документов:"));
	documentsBox.appendChild(document.createElement('br'));
	documentsBox.appendChild(docs);

	let submit = document.createElement('input');
	submit.type = "submit";

	let goal = document.createElement('div');						//create goal box
	goal.className = "Goal";
	form.appendChild(headBox);										//put head at the goal box
	form.appendChild(textBox);
	form.appendChild(progressBox);
	form.appendChild(requisitesBox);
	form.appendChild(documentsBox);
	form.appendChild(submit);
	goal.appendChild(form);
	document.getElementById('GoalsCase').appendChild(goal);			//put goal box on page
}
function CreateLabel(label)
{
	let Label = document.createElement('label');
	Label.innerHTML = label;
	return Label;
}