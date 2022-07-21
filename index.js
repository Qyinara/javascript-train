var kullanicilar = [
    {email: "erol@mail.com", sifre: "123"},
    {email: "yusuf@mail.com", sifre:"1234"}
]

var paylasimlar = [
    {email:"erol@mail.com", paylasim:"Hello World!"},
    {email:"erol@mail.com", paylasim:"Hello World! 2"},
    {email:"yusuf@mail.com", paylasim:"Hello World! 3"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre){
    for(i=0; i<kullanicilar.length; i++){
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true; 
        }
    }
    return false;
}

function giris(){
    if(kullaniciVarmi(email,sifre)){

        console.log(paylasimlar)
    }
    else{
        console.log("Kullanıcı Adı veya Şifre Hatalı");
    }
}

giris(email,sifre)

