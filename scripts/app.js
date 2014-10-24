(function (global) {

    app = global.app = global.app || {};

    
    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", loading: "<h1>Yükleniyor</h1>", skin: "flat" });
    /*
    app.endpoints = {
        login: "http://155.223.207.39/Rektorluk/api/Auth/Login",
        baskanView: "http://155.223.207.39/Rektorluk/api/Auth/BaskanView",
        arayanDetay: "http://155.223.207.39/Rektorluk/api/Auth/ArayanDetayBilgisiSorgula",
        arayanDetayAciklama: "http://155.223.207.39/Rektorluk/api/Auth/ArayanDetaySonucEkle",
        Cikis: "http://155.223.207.39/Rektorluk/api/Auth/Cikis",
        Rapor1: "http://155.223.207.39/Rektorluk/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://155.223.207.39/Rektorluk/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://155.223.207.39/Rektorluk/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://155.223.207.39/Rektorluk/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://155.223.207.39/Rektorluk/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://155.223.207.39/Rektorluk/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://155.223.207.39/Rektorluk/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://155.223.207.39/Rektorluk/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://155.223.207.39/Rektorluk/api/Auth/BankaDurumBilgisiSorgula",


        randevuDetayAciklama: "http://155.223.207.39/Rektorluk/api/Auth/RandevuDetayAciklamaEkle",
        randevuDetay: "http://155.223.207.39/Rektorluk/api/Auth/RandevuDetayBilgisiSorgula"
    };
  */

    var hostAdress = window.localStorage.getItem("ipAdres");
    //console.log(hostAdress);

    app.endpoints = {
        login: "http://" + hostAdress +"/Rektorluk/api/Auth/Login",
        baskanView: "http://" + hostAdress + "/Rektorluk/api/Auth/BaskanView",
        arayanDetay: "http://" + hostAdress + "/Rektorluk/api/Auth/ArayanDetayBilgisiSorgula",
        arayanDetayAciklama: "http://" + hostAdress + "/Rektorluk/api/Auth/ArayanDetaySonucEkle",
        Cikis: "http://" + hostAdress + "/Rektorluk/api/Auth/Cikis",
        Rapor1: "http://" + hostAdress + "/Rektorluk/api/Auth/GiderButceOranBilgisiSorgula",
        Rapor2: "http://" + hostAdress + "/Rektorluk/api/Auth/MudurlukHazirlananGiderButceOranBilgisiSorgula",
        Rapor3: "http://" + hostAdress + "/Rektorluk/api/Auth/MudurlukGerceklesenGiderButceOranBilgisiSorgula",
        Rapor4: "http://" + hostAdress + "/Rektorluk/api/Auth/MudurlukPersonelGideriToplamGelirButcesiOranBilgisiSorgula",
        Rapor5: "http://" + hostAdress + "/Rektorluk/api/Auth/MudurlukGerceklesenGiderMudurlukButceOranBilgisiSorgula",
        Rapor6: "http://" + hostAdress + "/Rektorluk/api/Auth/GelirButceOranBilgisiSorgula",
        Rapor7: "http://" + hostAdress + "/Rektorluk/api/Auth/TahsildarTahsilatBilgisiSorgula",
        Rapor8: "http://" + hostAdress + "/Rektorluk/api/Auth/GelirTuruTahsilatBilgisiSorgula",
        Rapor9: "http://" + hostAdress + "/Rektorluk/api/Auth/BankaDurumBilgisiSorgula",

        
        randevuDetayAciklama: "http://" + hostAdress + "/Rektorluk/api/Auth/RandevuDetayAciklamaEkle",
        randevuDetay: "http://" + hostAdress + "/Rektorluk/api/Auth/RandevuDetayBilgisiSorgula",
        ajandaRandevuDetay: "http://" + hostAdress + "/Rektorluk/api/Auth/AjandaRandevular",
        ajandaRandevuEkle: "http://" + hostAdress + "/Rektorluk/api/Auth/AjandaRandevuEkle",
        ajandaRandevuGuncelle: "http://" + hostAdress + "/Rektorluk/api/Auth/AjandaRandevuGuncelle"
    };

})(window);

function onLoad()
{ 
    document.addEventListener('deviceready', onDeviceReady, false);
    checkConnection();
}

function onDeviceReady() {
    //navigator.splashscreen.hide();
    cordova.exec(null, null, "SplashScreen", "hide", []);
    $(document.body).height(window.innerHeight);
}
function checkConnection() {
    //var networkState = navigator.connection.type;
    if (typeof navigator.connection !== "undefined")
    {
        if (navigator.network.connection.type === Connection.NONE) {
            /*navigator.notification.alert("Uygulama internet bağlantısı gerektirir.", function () {
                navigator.app.exitApp();
            }, "Bağlantı Hatası", 'Tamam');*/
            alert("Uygulama internet bağlantısı gerektirir.");
        }
    }
}
