function mots_a_trouver()
{
	return 	str = "Trigonometrique : Un cercle*Denominateur : Dans une fraction, le numerateur et le...*Abscisse : L'une des coordonnees d'un point du plan*Ordonnee : L'une des coordonnees d'un point du plan*Paralleles : Deux droites de meme direction*Perpendiculaires : Deux droites a 90 degres*Le perimetre : 2xPIxR est -- --------- d'un cercle*aire : PIxR<sup>2</sup> est L'---- d'un cercle*Segment : [AB]xPythagore : La somme des carres des cotes est egale au carre de l'Hypotenuse*Triangle : La somme de ses angles est 180 degres*Concentriques : Des cercles de memes centres*inverse : 1/2 est L'------- de 2*oppose : -2 est L'------ de 2*Factoriser : Reduire une equation*Rectangle : Un triangle ABC avec un angle de 90 degres en A*Translation : Dans le plan, transformer le point A en B*Demontrer : CQFD, Ce qu'il fallait...*Discriminant : Sert a trouver les solutions d'une equation du 2nd degre*Identite remarquable : (x - 1)<sup>2</sup> = x<sup>2</sup> - 2x + 1*Nombre premier : N'est divisible que par 1 et lui meme*Nombre entier : N'a pas de decimale*Mediatrice : Coupe orthogonalement un segment en son milieu*Bissectrice : Divise un angle en deux parties egales*Thales : Des rapports egaux dans un triangle, theoreme de*Vecteur : Le ------- directeur d'une droite*Derivee : 2x est la ------- de x<sup>2</sup>*integrale : x<sup>2</sup>/2 est L'--------- de x*Tangente : Le sinus d'un angle divise par le cosinus du meme angle*Logarithme : Le ---------- neperien*Valeur absolue : |x|*Inequation : -5x<-2*Racine carre : 4 est la ------ ----- de 16*Trinome : Equation du 2nd degre*Symetrique : Le point (2,2) est le point ---------- de (-2,-2) par rapport au point (0,0)*Limite : Lorsque X tend vers l'infini, 1/X tend vers 0, on parle de*Parabole : La representation graphique de la fonction f(x) = x<sup>2</sup> est une*Complexe : i<sup>2</sup> = -1, Nombre*Logarithme Neperien : Ln*Logarithme Decimal : Log*Exponentielle : e<sup>2</sup>*Derivee : uv = u'v + uv'*Multiplication : Est prioritaire sur l'addition*Division : Est prioritaire sur l'addition";
}
let fin = true;
let nb_erreurs = 0;
let nb_passe = 0;
let tab_mots;
let nb_mots = 0;
let chaine_rangee = "";
let le_mot = ""; var lindication = "";
let mem_mot = "";
let le_scrore = 10;
let lettres_ok ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let la_touche ="";

recuperer();

function recuperer()
{
	tab_mots = mots_a_trouver().split('*');
	nb_mots = tab_mots.length;
	//alert(nb_mots);
	//alert(tab_mots[0]);


}

function debuter()
{
	if(la_touche==" ")
	return;

	fin = false; nb_coups = 0; chaine_rangee = " ";
	 nb_passe = 0; nb_erreurs = 0; le_scrore = 10;

}

function init_calques()
{

}

function suivant()
{

}
	
function clavier(evenement)
{ 
	let indice = 0; 
	let la_lettre = "";
	let trouve = false;

	if(fin==true)
		return;

	let touche = window.event ? evenement.keyCode : evenement.which;
	touche = String.fromCharCode(touche).substr(0,1);
	//alert(touche);

	if(touche == " "){
		la_touche = " ";
		return;
	}
	if(lettres_ok.indexOf(touche)==-1)
		return;

	document.getElementById("calque_" + touche.toLowerCase()).style.backgroundColor="#2c1c1c";
}
