
var filmList = [] 

filmList [0] = 'https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg'
filmList [1] = 'https://livrosfilmes2017.files.wordpress.com/2017/08/quatro-vidas-cachorro-4.jpg'
filmList [2] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LHmK_WLUF8QvnsBL-WRXRByjzfGAE0KuOQ&usqp=CAU'

for (var list=0; list<3; list++){
   document.write('<img src=' + filmList[list] + '>')
}
