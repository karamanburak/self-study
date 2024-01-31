//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================


const numberButtons = document.querySelectorAll(".num")
const operationButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")



//?operator değişkenleri

let ustEkranText = ""
let altEkranText = ""
let islem = ""




//todo eşittir yada percent e basıldıktan sonra yeni işleme yeni sayılar girmek için, tıklandı tıklanmadı boolean değişkeni hazırladık, eşittir (ve de percent) butonunda bu true yani tıklandı olacak




//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
    number.onclick = () => {
        ekranaHazirlik(number.textContent)

        updateEkran()
    }


})




//!EKRANA HAZIRLIK


const ekranaHazirlik = (num) => {


    //todo kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün


    if (altEkranText === "0" && num != "0" && num != ".") {
        altEkranText = num
    }


    //todo kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

    if (num == "." && altEkranText.includes(".")) return




    //todo kullanıcı 10 haneden sonra girmesin

    if (altEkranText.length > 9) return


    //todo kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün


    if (altEkranText == "0" && num == "0") return


    //todo eşittir yada percent a basıldıktan sonra girilen number tek başına ekranda görünsün,çünkü yeni işlem başlıyor(ekranda 72 yazan işlem sonucu varken 5 e basınca 725 olmasın)




    //?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle

    altEkranText += num


}
//!BURADA YAPILANLARI EKRANA BASTIRMA

const updateEkran = () => {

    currentDisplay.textContent = altEkranText

    //todo işlem sonucu 8 haneyi geçmesin



    //?işlem girilince

    if (islem) {

        previousDisplay.textContent = `${ustEkranText}  ${islem}`
    } else {
        previousDisplay.textContent = ""
    }



}

//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {

    op.onclick = () => {




        //?currentDisplay boşken, hiçbir şekilde sayı girişi yapılmamışsa, operatöre basılmasın. boş return yapmaya çalıştığınız işlemi yaptırmaz.
        //? return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir. return değer döndürmek zorunda değildir. return den sonra else yerine if kullanmalıyız




        //todo eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)


        islem = op.textContent

        ustEkranText = altEkranText
        altEkranText = ""
        updateEkran()

    }

})

//?**************eşittir butonuna tıklandığında

equalButton.onclick = () => {
    // esittire basinca istenilen islem yapilmasi icin fonksiyon
    hesapla()


    // buradaki degiskenlerle yapilan islemlerin sonucu ekrana yansitilsin
    updateEkran()

}

const hesapla = () => {

    switch (islem) {
        case "+":
            result = +ustEkranText + Number(altEkranText)
            break;
        case "-":
            result = ustEkranText - altEkranText
            break;
        case "x":
            result = ustEkranText * altEkranText
            break;
        case "÷":
            result = ustEkranText / altEkranText
            break;

        default:
            break;
    }


    altEkranText = result
    ustEkranText = ""
    islem = ""

}






//! HESAPLA FONKSİYONU








//?AC butonuna basıldığında



//? PM butonuna basıldığında