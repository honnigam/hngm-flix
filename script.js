
var filmList = ['https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg','https://br.web.img3.acsta.net/pictures/16/08/31/23/26/562395.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LHmK_WLUF8QvnsBL-WRXRByjzfGAE0KuOQ&', 'https://pics.filmaffinity.com/Harry_Potter_and_the_Sorcerer_s_Stone-154820574-mmed.jpg','https://upload.wikimedia.org/wikipedia/pt/6/6f/Death_Race_poster.jpg' ]

var filmName = ['Minha mãe é uma peça ', 'Quatro vidas de um cachorro ', 'Fast & furious ', 'Harry Potter ', 'Corrida mortal']

for (var list=0; list<filmList.length; list++){
   document.write('<img src=' + filmList[list] + '>')
}

for (var list=0; list<filmName.length; list++){
   document.write(filmName[list])
}