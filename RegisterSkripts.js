function CreateRegisterMenu()
{
	var RegisterMenu = document.getElementById('RegisterMenu');
	RegisterMenu.style.display = (RegisterMenu.style.display == 'none') ? 'block' : 'none'
}
function CreaterProfilMenu()
{
	var ProfileMenu = document.getElementById('ProfileMenu');
	ProfileMenu.style.display = (ProfileMenu.style.display == 'none') ? 'block' : 'none'
}
function ShowPass()
{
	var check = document.getElementById('ShowPassButton');
	if(check.checked)
	{
		document.getElementById('rPas').type='text';
		document.getElementById('rPPas').type='text';
	}
	else
	{
		document.getElementById('rPas').type='password';
		document.getElementById('rPPas').type='password';
	}
}