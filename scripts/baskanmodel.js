var scope, token;
var RandevuId;
var ArayanId;
var dataSource1;
var AjandaToday;
app = window.app = window.app || {};

angular.module('belediyeModul', []).controller('belediyeCTRL', ['$scope', function ($scope) {
    //Arayan + Randevu
    $scope.Tarih = "03.02.2014";
    $scope.Arayanlar = [];
    $scope.Randevular = [];
    $scope.SecilenRandevu = [];
    $scope.SecilenArayan = [];
    $scope.AjandaRandevular = [];
    $scope.RandevuTipi = 1; // Default randevu tipi 1 : Resmi ; 2 : Özel
    $scope.selectedRandevuTipi;

    $scope.Set_Color = function (payment) {
        if (payment == "1") {
            return { color: "black" }
        }
        else if (payment == "2") {
            return { color: "blue" }
        }
        else if (payment == "3") {
            return { color: "#f35800" } //Koyu Turuncu #DF5900
        }
        else if (payment == "4") {
            return { color: "red" }
        }
        else {
            return { color: "black" }
        }
    };

    //Rapor 1
    $scope.Yillar;
    $scope.sorguBaslangicYil;
    $scope.sorguBitisYil;
    $scope.GiderButceOranBilgisiSorguSonuc = [];
    $scope.GiderButceOranBilgisiForm = function(){
        if($scope.sorguBaslangicYil.length < 1 || $scope.sorguBitisYil.length < 1)
        {
            navigator.notification.alert("Rapor için başlangıç ve bitiş yılı seçilmelidir.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguBaslangicYil': $scope.sorguBaslangicYil, 'sorguBitisYil' : $scope.sorguBitisYil },
                url: app.endpoints.Rapor1,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor1-chart", title:$scope.sorguBaslangicYil + " - " +  $scope.sorguBitisYil, data:result };
                        RaporChart1(chartData);
                        $scope.$apply(function(){
                           $scope.GiderButceOranBilgisiSorguSonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor2Sonuc;
    $scope.Rapor2 = function(){
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor2,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor2-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart2(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor2Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor3Sonuc;
    $scope.Rapor3 = function()
    {
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor3,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor3-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart3(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor3Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor4Sonuc;
    $scope.Rapor4 = function(){
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor4,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor4-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart4(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor4Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor5Sonuc;
    $scope.Rapor5 = function()
    {
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguYili': $scope.sorguBaslangicYil},
                url: app.endpoints.Rapor5,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor5-chart",title:$scope.sorguBaslangicYil, data:result };
                        RaporChart5(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor5Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
        
    };
    $scope.Rapor6Sonuc;
    $scope.Rapor6 = function()
    {
        if($scope.sorguBaslangicYil.length < 1)
        {
           navigator.notification.alert("Rapor için yıl gerekli.",
                    function () { }, "Giriş Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'sorguBaslangicYil': $scope.sorguBaslangicYil,'sorguBitisYil':$scope.sorguBitisYil},
                url: app.endpoints.Rapor6,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor6-chart",title:$scope.sorguBaslangicYil + " - " +$scope.sorguBitisYil, data:result };
                        RaporChart6(chartData);
                        $scope.$apply(function(){
                           $scope.Rapor6Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.BaslangicYil;
    $scope.BitisYil;
    $scope.Rapor7Sonuc;
    $scope.Rapor7 = function()
    {
        console.log($scope.BaslangicYil + " - " + $scope.BitisYil);
        if($scope.BaslangicYil === undefined || $scope.BitisYil === undefined)
        {
            
            navigator.notification.alert("Rapor için başlangıç ve bitiş tarihi belirtilmeli.",
                    function () { }, "Form Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'BaslangicYil': $scope.BaslangicYil.split("-").reverse().join("."),'BitisYil':$scope.BitisYil.split("-").reverse().join(".")},
                url: app.endpoints.Rapor7,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor7-chart",title:$scope.BaslangicYil.split("-").reverse().join(".") + " - " + $scope.BitisYil.split("-").reverse().join("."), data:result };
                        RaporChart7(chartData);
                        $scope.$apply(function(){
                           result.data.unshift({IslemTipiAdi:"Toplam", IslemTipiTahsilatTutari: result.toplam});
                           $scope.Rapor7Sonuc = result.data;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor8Sonuc;
    $scope.Rapor8 = function(){
        
        if($scope.BaslangicYil === undefined || $scope.BitisYil === undefined)
        {
            
            navigator.notification.alert("Rapor için başlangıç ve bitiş tarihi belirtilmeli.",
                    function () { }, "Form Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'BaslangicYil': $scope.BaslangicYil.split("-").reverse().join("."),'BitisYil':$scope.BitisYil.split("-").reverse().join(".")},
                url: app.endpoints.Rapor8,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        var chartData = { domId:"#rapor8-chart",title:$scope.BaslangicYil.split("-").reverse().join(".") + " - " + $scope.BitisYil.split("-").reverse().join("."), data:result };
                        RaporChart8(chartData);
                        $scope.$apply(function(){
                           //result.data.unshift({IslemTipiAdi:"Toplam", IslemTipiTahsilatTutari: result.toplam});
                           $scope.Rapor8Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
    };
    $scope.Rapor9Sonuc;
    $scope.Rapor9 = function(){
        if($scope.BaslangicYil === undefined)
        {
            
            navigator.notification.alert("Rapor için başlangıç ve bitiş tarihi belirtilmeli.",
                    function () { }, "Form Hatası", 'Tamam');
        }
        else
        {
            $.ajax({
                type: "POST",
                data: { 'accessToken': token, 'BaslangicYil': $scope.BaslangicYil.split("-").reverse().join(".") },
                url: app.endpoints.Rapor9,
                dataType: "json",
    			crossDomain: true,
                success: function (result) {
                    //console.log(result);
                    if (result != null) {
                        $scope.$apply(function(){
                           //result.data.unshift({IslemTipiAdi:"Toplam", IslemTipiTahsilatTutari: result.toplam});
                           $scope.Rapor9Sonuc = result;
                        });
                    }
                    else {
                        window.localStorage.removeItem("accessToken");
                        window.location = "index.html";
                    }
                }
            });
        }
        
    };
}]);

var RaporChart1 = function(data)
{            
            var harcamaList = Array();
            var butceList = Array();
            var Yillar = Array();
            for(var i = 0; i< data.data.length;i++)
            {
                harcamaList.push(parseFloat(data.data[i].Harcama));
                butceList.push(parseFloat(data.data[i].Butce));
                Yillar.push(parseInt(data.data[i].Yil));
                
            }
            $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: butceList,
                    color: "#f3ac32"
                }, {
                    name: "Harcama",
                    data: harcamaList,
                    color: "#b8b8b8"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    categories: Yillar,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= series.name #: #= value #"
                }
            });
 
};
var RaporChart2 = function(data)
{
    var mudurluk = Array();
    var Butce = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        mudurluk.push(data.data[i].Aciklama);
        Butce.push(parseFloat(data.data[i].MeclisKabul));
    }
    $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: Butce,
                    color: "#5bc0de"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: mudurluk,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
 
};
var RaporChart3 = function(data)
{
    var mudurluk = Array();
    var Butce = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        mudurluk.push(data.data[i].Aciklama);
        Butce.push(parseFloat(data.data[i].Harcama));
    }
    $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: Butce,
                    color: "#5bc0de"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: mudurluk,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
 
};
var RaporChart4 = function(data)
{
    var mudurluk = Array();
    var Butce = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        mudurluk.push(data.data[i].Aciklama);
        Butce.push(parseFloat(data.data[i].Harcama));
    }
    $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Harcama",
                    data: Butce,
                    color: "#5bc0de"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: mudurluk,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
 
};
var RaporChart5 = function(data)
{            
            var harcamaList = Array();
            var butceList = Array();
            var kategori = Array();
            for(var i = 0; i< data.data.length;i++)
            {
                if(data.data[i].KurId === 0)
                    continue;
                harcamaList.push(parseFloat(data.data[i].Harcama));
                butceList.push(parseFloat(data.data[i].Butce));
                kategori.push(data.data[i].Aciklama);
                
            }
            $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: butceList,
                    color: "#f3ac32"
                }, {
                    name: "Harcama",
                    data: harcamaList,
                    color: "#b8b8b8"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    visible:false,
                    categories: kategori,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category # ( #= series.name # ) : #= value #"
                }
            });
 
};
var RaporChart6 = function(data)
{            
            var harcamaList = Array();
            var butceList = Array();
            var Yillar = Array();
            for(var i = 0; i< data.data.length;i++)
            {
                harcamaList.push(parseFloat(data.data[i].Tahsilat));
                butceList.push(parseFloat(data.data[i].Butce));
                Yillar.push(parseInt(data.data[i].Yil));
                
            }
            $(data.domId).kendoChart({
                title: {
                    text: data.title
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: "bar"
                },
                series: [{
                    name: "Bütçe",
                    data: butceList,
                    color: "#f3ac32"
                }, {
                    name: "Tahsilat",
                    data: harcamaList,
                    color: "#b8b8b8"
                }],
                valueAxis: {
                    visible:false,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    categories: Yillar,
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= series.name #: #= value #"
                }
            });
 
};
var RaporChart7 = function(ch)
{
    var data = [];
    var obj;
    for(var i =0;i<ch.data.data.length;i++)
    {
        obj = {
            category:ch.data.data[i].IslemTipiAdi,
            value:((parseFloat(ch.data.data[i].IslemTipiTahsilatTutari) * 100) / ch.data.toplam)
        };
        //console.log(obj);
        data.push(obj);
    }
    //console.log(data);
    $(ch.domId).kendoChart({
        title: {
            text: ch.title
        },
        legend: {
           position: "bottom"
        },
        seriesDefaults: {
            labels: {
                template: "#= category # - #= kendo.format('{0:P}', percentage)#",
                position: "outsideEnd",
                visible: false,
                background: "transparent"
            }
        },
        series: [{
            type: "pie",
            data: data}],
        tooltip: {
            visible: true,
            template: "#= category # - #= kendo.format('{0:P}', percentage) #"
        }
     });
};
var RaporChart8 = function(data)
{
    var kalemler = Array();
    var tutarlar = Array();
    for(var i = 0; i< data.data.length; i++)
    {
        kalemler.push(data.data[i].GelirAdi);
        tutarlar.push(parseFloat(data.data[i].Tutar));
    }
    $(data.domId).kendoChart({
        title: {
            text: data.title
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bar"
        },
        series: [{
            name: "Tutar",
            data: tutarlar,
            color: "#357EBD"
        }],
        valueAxis: {
            visible:false,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            visible:false,
            categories: kalemler,
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= category #: #= value #"
        }
    });
};

$(function () {

    $.ajaxSetup({
        beforeSend: function () { app.application.showLoading(); },
        complete: function () { app.application.hideLoading(); },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                navigator.notification.alert("Uygulama internet bağlantısı gerektirir.", function () {
                    navigator.app.exitApp();
                }, "Bağlantı Hatası", 'Tamam');
            } else if (jqXHR.status == 404) {
                //navigator.notification.alert("Servis noktası bulunamadı.",function () { }, "Bağlantı Hatası", 'Tamam');
                alert("Servis noktası bulunamadı.");
            } else if (jqXHR.status >= 500) {
                //navigator.notification.alert("Serviste sunucu hatası.",function () { }, "Sistem Hatası", 'Tamam');
                alert("Serviste sunucu hatası.");
            } else if (exception === 'parsererror') {
                //navigator.notification.alert("Servisten dönen kayıt hatalı.",function () { }, "Sistem Hatası", 'Tamam');
                alert("Servisten dönen kayıt hatalı.");
            } else if (exception === 'timeout') {
                //navigator.notification.alert("İstek zaman aşımına uğradı.",function () { }, "Zaman aşımı", 'Tamam');
                alert("İstek zaman aşımına uğradı.");
            } else if (exception === 'abort') {
                //navigator.notification.alert("İstek iptal edildi.",function () { }, "Sistem Hatası", 'Tamam');
                alert("İstek iptal edildi.");
            } else {
                //navigator.notification.alert("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",function () { }, "Bilinmeyen Hata", 'Tamam');
                alert("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
            }
        }
    });

    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();

    var now = new Date();
    var today = new Date();
    today = new Date(today);
    var nextDay = new Date();

    $(function () {
        kendo.culture('tr-TR');
    });
    AjandaToday = today;
    AjandaRandevuFetchData(token, today);
    //----------------------------------------------------------------
    $(document).ready(function () {

        //Özel randevuların gözükmesi için gerekli setlemeler yetki bazında gerçekleşir.
        $("#select-randevu-ozel-bazinda").hide();
        $("#select-ajanda-ozel-bazinda").hide();
        if (window.localStorage.OzelRandevularGozuksun === "true") {
            $("#select-randevu-ozel-bazinda").show();
            $("#select-ajanda-ozel-bazinda").show();
            $("#scheduler-randevu-ozel").show();
        }

        KendoScheduler(today);

        var scheduler3 = $("#scheduler").data("kendoScheduler");
        var AjandaTarih1 = scheduler3.date();



        //$("#SchedulerDatePicker")[0].childNodes[0].childNodes[0].value = (AjandaTarih1.getDate().toString().length > 1 ? AjandaTarih1.getDate() : ("0" + AjandaTarih1.getDate())) + "." + ((AjandaTarih1.getMonth() + 1).toString().length > 1 ? (AjandaTarih1.getMonth() + 1) : ("0" + (AjandaTarih1.getMonth() + 1))) + "." + AjandaTarih1.getFullYear();
        $("#SchedulerDatePicker").kendoDatePicker({
            value: (today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear()),
            change: function () {
                //console.log("This.Value : " + this.value());
                scheduler3.date(this.value());
                $('#Tarih').data('kendoDatePicker').value(tarihDuzenleFormataGore(this.value()));
            }
            //format: "dd/MM/yyyy",
        });
        //$('#SchedulerDatePicker').attr('disabled', 'disabled');

        //console.log($(".k-state-default.k-nav-current")[0].childNodes[0].childNodes[1].firstChild.data);
        // Scheduler in tarihi her değiştiğinde tabstript-aramalar ve tabstript-randevular kısmında bulunan kendodatepicker içeriği de schedulerden seçilen tarihe göre güncellenir.
        $(document).on("click", ".k-link", function () {        /* class adı : ".k-link" , "#scheduler"  .k-scheduler-toolbar*/

            var scheduler2 = $("#scheduler").data("kendoScheduler");
            var AjandaTarih = scheduler2.date();

            //console.log("AjandaTarih : " + scheduler2.date());

            //var t = $(".k-state-default.k-nav-current")[0].childNodes[0].childNodes[1].firstChild.data;
            //var trh = new Date(AjandaTarihDuzenle(t));
            var trh = AjandaTarih;
            //console.log("AA : " + (trh.getDate().toString().length > 1 ? trh.getDate() : ("0" + trh.getDate())) + "." + ((trh.getMonth() + 1).toString().length > 1 ? (trh.getMonth() + 1) : ("0" + (trh.getMonth() + 1))) + "." + trh.getFullYear());
            //$("#SchedulerDatePicker")[0].childNodes[0].childNodes[0].value = (trh.getDate().toString().length > 1 ? trh.getDate() : ("0" + trh.getDate())) + "." + ((trh.getMonth() + 1).toString().length > 1 ? (trh.getMonth() + 1) : ("0" + (trh.getMonth() + 1))) + "." + trh.getFullYear()
            var guncelTarih = (trh.getDate().toString().length > 1 ? trh.getDate() : ("0" + trh.getDate())) + "." + ((trh.getMonth() + 1).toString().length > 1 ? (trh.getMonth() + 1) : ("0" + (trh.getMonth() + 1))) + "." + trh.getFullYear();
            //console.log($("#SchedulerDatePicker")[0].childNodes[0].childNodes[0].value);
            scope.$apply(function () {
                scope.Tarih = guncelTarih.toString();
                //console.log((trh.getDate().toString().length > 1 ? trh.getDate() : ("0" + trh.getDate())) + "." + ((trh.getMonth() + 1).toString().length > 1 ? (trh.getMonth() + 1) : ("0" + (trh.getMonth() + 1))) + "." + trh.getFullYear());
            });

            $('#SchedulerDatePicker').data('kendoDatePicker').value(guncelTarih.toString());
        });
        function AjandaTarihDuzenle(tar) {
            var temp;
            var tarih;
            if (tar.indexOf("-") != "-1") {
                //console.log("- li Tarih");
                temp = tar.split("-");
                var k = temp[0].split(".");
                //console.log(k[0] + "   " + (k[1] - 1) + "   " + k[2]);
                tarih = new Date(k[2], k[1], k[0]);
            }
            else {
                //console.log("Normal Tarih");
                temp = tar.split(" ");
                var ay;
                if (temp[1] == "Ocak")    ay = 01;
                if (temp[1] == "Şubat")   ay = 02;
                if (temp[1] == "Mart")    ay = 03;
                if (temp[1] == "Nisan")   ay = 04;
                if (temp[1] == "Mayıs")   ay = 05;
                if (temp[1] == "Haziran") ay = 06;
                if (temp[1] == "Temmuz")  ay = 07;
                if (temp[1] == "Ağustos") ay = 08;
                if (temp[1] == "Eylül")   ay = 09;
                if (temp[1] == "Ekim")    ay = 10;
                if (temp[1] == "Kasım")   ay = 11;
                if (temp[1] == "Aralık")  ay = 12;

                tarih = new Date(temp[2], ay, temp[0]);
                //console.log(temp[0] + "    " + temp[1] + " - " + (ay - 1) + "    " + temp[2]);
            }
            return tarih;
        };
    });

    scope.$apply(function () {
        scope.Tarih = today;
    });

    $(document).ready(function () {

        // create DropDownList from input HTML element
        $("#rTipiComboBox").kendoDropDownList({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Resmi", value: "1" },
                { text: "Özel", value: "2" }
            ]
        });

        /*dataSource1.fetch(function () {
            
            for (var i = 0; i < this.data().length ; i++) {
                //document.getElementById("#" + this.data()[i].uid.toString()).style.color = "blue";
                
                //console.log(this.data()[i].uid);
            }
        });*/
        var scheduler = $("#scheduler").data("kendoScheduler");

        //Uygulama kullanılırken ekran boyutu değiştirildiğinde (telefon yan yatırıldığında vs) schedulerin mevcut ekrana uyum sağlaması için gereken setlemeler
        $(window).resize(function () {
            var genislik = $(window).width();
            var yukseklik = $(window).height();
            if (yukseklik > genislik)
                yukseklik = yukseklik - 100;
            scheduler.element.height(yukseklik);
            $(".km-pane-wrapper").css({ "height": yukseklik });
            //console.log(scheduler.element.height());
            //console.log($(".km-pane-wrapper").css("height"));
            $("#scheduler").data("kendoScheduler").refresh();
        });

        $("#Tarih").kendoDatePicker({
            value: (today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear()),
            change: function () {
                //console.log("This.Value : " + this.value());
                scheduler.date(this.value());
                $('#SchedulerDatePicker').data('kendoDatePicker').value((this.value()).toString());
            }
            //format: "dd/MM/yyyy",
        });

        $(document).on("click", "#Dun", function () {
            scope.$apply(function () {
                scope.Tarih = decreaseFromDate(tarihDuzenleFormataGore(scope.Tarih));
            });
            AjandaTarihDegistir(scope.Tarih);
            fetchData(token);
        });

        $(document).on("click", "#Bugun", function () {
            var t = tarihDuzenleFormataGore(today);
            scope.$apply(function () {
                scope.Tarih = t;
            });
            AjandaTarihDegistir(scope.Tarih);
            fetchData(token);
        });

        $(document).on("click", "#Yarin", function () {

            scope.$apply(function () {
                scope.Tarih = increaseFromDate(tarihDuzenleFormataGore(scope.Tarih));
            });
            AjandaTarihDegistir(scope.Tarih);
            fetchData(token);
        });

        //Tarih.value(today);
        //today.setDate(today.getDate() + 1);
    });
    //Sorgu Başlangıç-Bitiş yılları -5
    var yillar = Array();
    scope.$apply(function () {
        for (var i = now.getFullYear() - 8; i <= now.getFullYear() ; i++) {
            yillar.push(i);
        }
        scope.Yillar = yillar;
        scope.sorguBaslangicYil = yillar[0];
        scope.sorguBitisYil = yillar[yillar.length - 1];
    });

    fetchData(token);
    $(document).on("change", "#Tarih", function () {
        AjandaTarihDegistir(scope.Tarih);
        fetchData(token);
    });
    //console.log("VALUE : " + $("k-state-default k-nav-current").innerHTML);
    //console.log(document);

});

function KendoScheduler(today) {
    kendo.culture('tr-TR');

    //console.log(getBrowserWindowSize().height);


    //Kullanıcı sadece readonly ise için gerekli setlemeler yetki bazında gerçekleşir.
    var IsCreateAndUpdateIsReadOnly = false;
    if (window.localStorage.SadeceOkusun === "false") {
        IsCreateAndUpdateIsReadOnly = true;
    }
    

    $("#scheduler").kendoScheduler({
        date: new Date(today),/*new Date("2014/01/16"),*/
        startTime: new Date("2013/6/13 8:00"),
        endTime: new Date("2013/6/13 22:00"),
        //selectable:true,
        //height: getBrowserWindowSize().height-100,
        height: $(window).height() - 100,
        majorTick: 60,                  // Soldaki saat aralığı.(1 saat)
        showWorkHours: false,           // İlk açılışta mesai saatlerini göstermesin tümünü göstersin.
        allDaySlot: false,              // Gridin üstüne allDay satırını kaldırır.
        minorTickCount: 2,             // İki saat arasının kaç aralığa bölünmesi gerektiğini setler.
        // mobile: true,                   //Render edilirken mobile göre düzenlenir.
        views: [
            { type: "day" },
            { type: "week", selectedDateFormat: "{0:dd.MM.yyyy} - {1:dd.MM.yyyy}" },
            { type: "month"},
            { type: "agenda", selected: true, selectedDateFormat: "{0:dd.MM.yyyy} - {1:dd.MM.yyyy}" }
        ],
        edit: scheduler_edit,
        /*resources: [{
            field: "taskId",
            title: "TASK",
            dataSource: [{
                text: "Resmi",
                value: 1,
                color: "#f8a398"
            }, {
                text: "Özel",
                value: 2,
                color: "#51a0ed"
            }]
        }],*/
        //editable: true,
        /*editable: {
            destroy: false,                                      //Event detaya tıklandığında silme işlemi disable edilir.
            update: true,
            create: true
        },*/
        editable: {
            update: IsCreateAndUpdateIsReadOnly,
            destroy: false,
            create: IsCreateAndUpdateIsReadOnly,
            template: kendo.template($("#scheduler-template").html())
        },
        eventTemplate: $("#event-template").html(),             //Gridde gösterilecek randevu içeriği.
        mobile: "phone",
        timezone: "Etc/UTC",                                    //Datepicker durumu.
        footer: false,
        /*footer: {                                               //Mesai saatlerini göster butonu inaktif yapar.
            command: true
        },*/
        messages: {                                             //Mesai saatleri göster butonu yazısını günceller.
            showWorkDay: "Mesai Saatlerini Göster",
            showFullDay: "Tüm Günü Göster",
            allDay: "Gün",
            cancel: "Vazgeç",
            deleteWindowTitle: "Randevu Sil",
            destroy: "Sil",
            save: "Kaydet",
            today: "Bugün",
            editor: {
                //allDayEvent: "All Day event",            //Editable:true iken açılan kısımda alldayevent check box text yazısı
                allDayEvent: false,
                description: "Konusu",                   //Editable:true iken açılan kısımda description text yazısı
                editorTitle: "Randevu Düzenle",
                start: "Başlama Saati",
                end: "Bitiş Saati",
                endTimezone: "End date timezone",
                repeat: "Repeat the event",
                title: "Randevu Yeri"   //Yeni event eklerken title text yazısı.
            },
            views: {
                day: "Gün",
                week: "Hafta",
                agenda: "Ajanda"
            }
        },
        dataSource: dataSource1
        /*resources: [
        {
            color : "red"
            field: "ownerId",
            title: "Owner",
            dataSource: [
                { text: "Alex", value: 1, color: "#f8a398" },
                { text: "Bob", value: 2, color: "#51a0ed" },
                { text: "Charlie", value: 3, color: "#56ca85" }
            ]
        }
    ]*/
    });
}

function scheduler_edit(e) {
    $("#scheduler-randevu-ozel").hide();
    $("#select-resmi-ozel-textbox").hide();
    if (window.localStorage.OzelRandevularGozuksun === "true") {
        $("#scheduler-randevu-ozel").show();
    }

    var ranTipi = e.event.randevuTipi === 1 ? 0 : 1;

   if ($("#select-resmi-ozel")[0].dataset.role !== "buttongroup") {
        //console.log(e);
        $("#select-resmi-ozel").kendoMobileButtonGroup({
            select: function (ex) {
                if (ex.index === 0)//Resmi Randevular
                {
                    e.event.randevuTipi = 1;
                    $("#select-resmi-ozel-textbox").focus();
                    $("#select-resmi-ozel-textbox").val("1");
                }
                else if (ex.index === 1)// Özel Randevular 
                {
                    e.event.randevuTipi = 2;
                    $("#select-resmi-ozel-textbox").focus();
                    $("#select-resmi-ozel-textbox").val("2");
                    //scheduler.addEvent({ randevuTipi: "aaa" });
                }
            },
            index: ranTipi
        });
   }

   var scheduler = $("#scheduler").data("kendoScheduler");
   scheduler.bind("save", scheduler_save);

}

function scheduler_save(e) {
    //var scheduler = $("#scheduler").data("kendoScheduler");
    //console.log(scheduler);
    //console.log(dataSource1);
    //scheduler.options.dataSource.transport.update();
    //console.log(e);
   
};

function getBrowserWindowSize() {
    var myWidth = 0, myHeight = 0;
    if (typeof (window.innerWidth) == 'number') {
        //İnternet explorer değilse
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    }
    else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //internet Explorer 6+ 
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    }
    else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //internet Explorer 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

    return { width: myWidth, height: myHeight };
};

function EventTemplateFunc(val) {
    //console.log($(val).find("#SecilenId")[0].innerHTML);
    var RandevuId = $(val).find("#SecilenId")[0].innerHTML;
    RandevuGetirById(RandevuId);
};

function RandevuGetirById(RandevuId) {
    //console.log(RandevuId);
    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();
    
    $.ajax({
        type: "POST",
        data: { 'accessToken': token, SecilenRandevuId: RandevuId },
        url: app.endpoints.randevuDetay,
        dataType: "json",
        crossDomain: true,
        success: function (result) {
            console.log(result);
            if (result != null) {
                scope.$apply(function () {
                    scope.SecilenRandevu = result.SecilenRandevu;
                    window.location.href = "#RandevuDetay";
                });

                //Kullanıcı sadece readonly ise için gerekli setlemeler yetki bazında gerçekleşir.
                $("#randevu-detay-aciklamaekle").hide();
                $("#randevu-detay-aciklamaeklebtn").hide();
                if (window.localStorage.SadeceOkusun === "false") {
                    $("#randevu-detay-aciklamaekle").show();
                    $("#randevu-detay-aciklamaeklebtn").show();
                }
            }
            else {
                window.localStorage.removeItem("accessToken");
                window.location = "index.html";
            }
        },
        error: function () {
            alert("Randevu seçilirken bir hata meydana geldi.");
        }
    });
};

function AjandaTarihDegistir(tar) {
    var scheduler = $("#scheduler").data("kendoScheduler");
    var dizi = tar.split(".");
    var tarih = new Date(dizi[2], (dizi[1] - 1), dizi[0]);
    //console.log("TAR : " + tarih);
    scheduler.date(tarih);
    $('#SchedulerDatePicker').data('kendoDatePicker').value(tar.toString());
};

function AjandaRandevuFetchData(accessToken, bugun){
    var dataal;
    //------------------------------------------------------------
    dataSource1 = new kendo.data.SchedulerDataSource({
        batch: true,
        data: dataal,
        transport: {
            read: function (options) {
                $.ajax({
                    type: "POST",
                    data: { 'accessToken': accessToken, Tarih: tarihDuzenleFormataGore(bugun)/*Tarih: "16.01.2011"*/, RandevuTipi: scope.RandevuTipi  },
                    url: app.endpoints.ajandaRandevuDetay,
                    dataType: "json",
                    beforeSend: function () { app.application.showLoading(); },
                    complete: function () { app.application.hideLoading(); },
                    crossDomain: true,
                    success: function (result) {
                        if (result != null) {
                            if (scope.AjandaRandevular.length != null){
                                scope.$apply(function () {
                                    scope.AjandaRandevular = result.Randevular;

                                    for (var i = 0; i < scope.AjandaRandevular.length; i++)
                                    {
                                        scope.AjandaRandevular[i].BaslamaTarihi = new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati)));
                                        //DB de her ihtimale karşı bitiş saati girilmediyse başlangıç saatinden 1 saat sonraya bitiş tarihi atanır.
                                        scope.AjandaRandevular[i].BitisTarihi = new Date((new Date(scope.AjandaRandevular[i].BitisTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BitisSaati) == "" ? parseInt(getSaat(scope.AjandaRandevular[i].BaslamaSaati)) + 1 : getSaat(scope.AjandaRandevular[i].BitisSaati), getDakika(scope.AjandaRandevular[i].BitisSaati) == "" ? getDakika(scope.AjandaRandevular[i].BaslamaSaati) : getDakika(scope.AjandaRandevular[i].BitisSaati)));
                                        //console.log("TARIH : " + tarihDuzenle(new Date(scope.AjandaRandevular[i].BaslamaTarihi)));
                                        //console.log("TARIH : " + (new Date(scope.AjandaRandevular[i].BaslamaTarihi)).toString() + " --- " + scope.AjandaRandevular[i].BaslamaSaati);
                                        //console.log("SAAT : " + getSaat(scope.AjandaRandevular[i].BaslamaSaati) + "////" + getDakika(scope.AjandaRandevular[i].BaslamaSaati));
                                        //console.log("SAAT : " + new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati))));

                                        //console.log(scope.AjandaRandevular[i].Id
                                        //+ "    " + scope.AjandaRandevular[i].BaslamaSaati
                                        //+ "    " + scope.AjandaRandevular[i].BitisSaati
                                        //+ " " + scope.AjandaRandevular[i].Konu
                                        //+ " " + scope.AjandaRandevular[i].Hatirlatma
                                        //+ " " + scope.AjandaRandevular[i].Yeri
                                        //+ " " + scope.AjandaRandevular[i].Aciklama
                                        //+ "    " + scope.AjandaRandevular[i].BaslamaTarihi
                                        //+ "    " + scope.AjandaRandevular[i].BitisTarihi
                                        //+ "    " + new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati)))
                                        //+ "    " + new Date((new Date(scope.AjandaRandevular[i].BitisTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BitisSaati), getDakika(scope.AjandaRandevular[i].BitisSaati)))
                                        //);
                                    }
                                });
                                //console.log(result.Randevular);
                                options.success(result.Randevular);
                            }
                        }
                        else {
                            window.localStorage.removeItem("accessToken");
                            window.location = "index.html";
                        }
                    },
                    error: function () {
                        alert("Veriler alınırken bir hata meydana geldi.");
                    }
                });
            },
            update: function (options) {
                //console.log(options);
                //console.log(options.data.models[0].BitisTarihi);
                var basTarihi = tarihDuzenleFormataGore(options.data.models[0].BaslamaTarihi);
                var bitTarihi = tarihDuzenleFormataGore(options.data.models[0].BitisTarihi);
                //console.log(basTarihi);
                //console.log(bitTarihi);

                var basSaati = (((options.data.models[0].BaslamaTarihi.toString()).split(" "))[4].toString()).split(":");
                var bitSaati = (((options.data.models[0].BitisTarihi.toString()).split(" "))[4].toString()).split(":");
                basSaati = basSaati[0] + ":" + basSaati[1];
                bitSaati = bitSaati[0] + ":" + bitSaati[1];
                //console.log(basSaati);
                //console.log(bitSaati);
                $.ajax({
                    type: "POST",
                    data: {
                        'accessToken': accessToken
                        , Tarih: tarihDuzenleFormataGore(bugun)
                        , Id: options.data.models[0].Id.toString()
                        , BaslamaTarihiStr: basTarihi.toString()
                        , BitisTarihiStr: bitTarihi.toString()
                        , BaslamaSaati: basSaati.toString()
                        , BitisSaati: bitSaati.toString()
                        , Konu: options.data.models[0].Konu
                        , Katilimcilar: options.data.models[0].Katilimcilar
                        , YerId: "1"
                        , TuruId: "2"
                        , Hatirlatma: options.data.models[0].Hatirlatma
                        , Aciklama: options.data.models[0].Aciklama
                        , TalepEden: options.data.models[0].TalepEden
                        , Telefon: options.data.models[0].Telefon
                        , Email: options.data.models[0].Email
                        , Yeri: options.data.models[0].Yeri
                        , Adres: options.data.models[0].Adres
                        , KonuRenk: "1"
                        , HatirlatmaRenk: "2"
                        , KatilimciRenk: "3"
                        , Silindi: "0"
                        , RandevuTipi: options.data.models[0].RandevuTipi
                        , UygulamaninKullandigiRandevuTipi: scope.RandevuTipi
                        //, RandevuTipi: $("#select-resmi-ozel-textbox").val()
                    },
                    url: app.endpoints.ajandaRandevuGuncelle,
                    dataType: "json",
                    beforeSend: function () { app.application.showLoading(); },
                    complete: function () { app.application.hideLoading(); },
                    crossDomain: true,
                    success: function (result) {
                        //console.log(result);
                        if (result != null) {
                            if (scope.AjandaRandevular.length != null) {
                                scope.$apply(function () {
                                    scope.AjandaRandevular = result.Randevular;
                                    for (var i = 0; i < scope.AjandaRandevular.length; i++) {
                                        scope.AjandaRandevular[i].BaslamaTarihi = new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati)));
                                        //DB de her ihtimale karşı bitiş saati girilmediyse başlangıç saatinden 1 saat sonraya bitiş tarihi atanır.
                                        scope.AjandaRandevular[i].BitisTarihi = new Date((new Date(scope.AjandaRandevular[i].BitisTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BitisSaati) == "" ? parseInt(getSaat(scope.AjandaRandevular[i].BaslamaSaati)) + 1 : getSaat(scope.AjandaRandevular[i].BitisSaati), getDakika(scope.AjandaRandevular[i].BitisSaati) == "" ? getDakika(scope.AjandaRandevular[i].BaslamaSaati) : getDakika(scope.AjandaRandevular[i].BitisSaati)));
                                    }
                                });
                                options.success(result.Randevular);
                                //location.reload();
                                dataSource1.read();
                                $("#scheduler").data("kendoScheduler").refresh();
                            }
                        }
                        else {
                            window.localStorage.removeItem("accessToken");
                            window.location = "index.html";
                        }
                    },
                    error: function () {
                        alert("Yeni kayıt oluşumu sırasında bir hata meydana geldi.");
                    }
                });
            },
            create: function (options) {
                //console.log(options.data.models[0].BaslamaTarihi);
                //console.log(options.data.models[0].BitisTarihi);
                var basTarihi = tarihDuzenleFormataGore(options.data.models[0].BaslamaTarihi);
                var bitTarihi = tarihDuzenleFormataGore(options.data.models[0].BitisTarihi);
                //console.log(basTarihi);
                //console.log(bitTarihi);

                var basSaati = (((options.data.models[0].BaslamaTarihi.toString()).split(" "))[4].toString()).split(":");
                var bitSaati = (((options.data.models[0].BitisTarihi.toString()).split(" "))[4].toString()).split(":");
                basSaati = basSaati[0] + ":" + basSaati[1];
                bitSaati = bitSaati[0] + ":" + bitSaati[1];
                //console.log(basSaati);
                //console.log(bitSaati);
                $.ajax({
                    type: "POST",
                    data: {
                        'accessToken': accessToken
                        , Tarih: tarihDuzenleFormataGore(bugun)
                        , BaslamaTarihiStr: basTarihi.toString()
                        , BitisTarihiStr: bitTarihi.toString()
                        , BaslamaSaati: basSaati.toString()
                        , BitisSaati: bitSaati.toString()
                        , Konu: options.data.models[0].Konu
                        , Katilimcilar: options.data.models[0].Katilimcilar
                        , YerId: "1"
                        , TuruId: "2"
                        , Hatirlatma: options.data.models[0].Hatirlatma
                        , Aciklama: options.data.models[0].Aciklama
                        , TalepEden: options.data.models[0].TalepEden
                        , Telefon: options.data.models[0].Telefon
                        , Email: options.data.models[0].Email
                        , Yeri: options.data.models[0].Yeri
                        , Adres: options.data.models[0].Adres
                        , KonuRenk: "1"
                        , HatirlatmaRenk: "2"
                        , KatilimciRenk: "3"
                        , Silindi: "0"
                        , RandevuTipi: options.data.models[0].RandevuTipi
                        , UygulamaninKullandigiRandevuTipi: scope.RandevuTipi
                    },
                    url: app.endpoints.ajandaRandevuEkle,
                    dataType: "json",
                    beforeSend: function () { app.application.showLoading(); },
                    complete: function () { app.application.hideLoading(); },
                    crossDomain: true,
                    success: function (result) {
                        //console.log(result);
                        if (result != null) {
                            if (scope.AjandaRandevular.length != null) {
                                scope.$apply(function () {
                                    scope.AjandaRandevular = result.Randevular;
                                    for (var i = 0; i < scope.AjandaRandevular.length; i++) {
                                        scope.AjandaRandevular[i].BaslamaTarihi = new Date((new Date(scope.AjandaRandevular[i].BaslamaTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BaslamaSaati), getDakika(scope.AjandaRandevular[i].BaslamaSaati)));
                                        //DB de her ihtimale karşı bitiş saati girilmediyse başlangıç saatinden 1 saat sonraya bitiş tarihi atanır.
                                        scope.AjandaRandevular[i].BitisTarihi = new Date((new Date(scope.AjandaRandevular[i].BitisTarihi)).setHours(getSaat(scope.AjandaRandevular[i].BitisSaati) == "" ? parseInt(getSaat(scope.AjandaRandevular[i].BaslamaSaati)) + 1 : getSaat(scope.AjandaRandevular[i].BitisSaati), getDakika(scope.AjandaRandevular[i].BitisSaati) == "" ? getDakika(scope.AjandaRandevular[i].BaslamaSaati) : getDakika(scope.AjandaRandevular[i].BitisSaati)));
                                    }
                                });
                                options.success(result.Randevular);
                                //location.reload();
                                dataSource1.read();
                                $("#scheduler").data("kendoScheduler").refresh();
                            }
                        }
                        else {
                            window.localStorage.removeItem("accessToken");
                            window.location = "index.html";
                        }
                    },
                    error: function () {
                        alert("Yeni kayıt oluşumu sırasında bir hata meydana geldi.");
                    }
                });
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "Id", type: "number" },
                    start: { from: "BaslamaTarihi", type: "date" },
                    end: { from: "BitisTarihi", type: "date" },
                    baslamaSaati: { from: "BaslamaSaati" },
                    bitisSaati: { from: "BitisSaati" },
                    description: { from: "Konu" },
                    katilimcilar: { from: "Katilimcilar" },
                    yerId: { from: "YerId" },
                    turuid: { from: "TuruId" },
                    hatirlatma: { from: "Hatirlatma" },
                    aciklama: { from: "Aciklama" },
                    talepEden: { from: "TalepEden" },
                    telefon: { from: "Telefon" },
                    email: { from: "Email" },
                    title: { from: "Yeri", defaultValue: "", validation: { required: true } },
                    adres: { from: "Adres" },
                    konuRenk: { from: "KonuRenk" },
                    hatirlatmaRenk: { from: "HatirlatmaRenk" },
                    katilimciRenk: { from: "KatilimciRenk" },
                    silindi: { from: "Silindi" },
                    yoneticiId: { from: "YoneticiId" },
                    randevuTipi: { from: "RandevuTipi", type: "number", defaultValue: 1, validation: { required: true } }
                    //startTimezone: { from: "Baslama,Saati" },
                    //endTimezone: { from: "BitisSaati" },
                    //recurrenceId: { from: "RecurrenceID" },
                    //recurrenceRule: { from: "RecurrenceRule" },
                    //recurrenceException: { from: "RecurrenceException" },
                    //ownerId: { from: "projectid", defaultValue: 1 },
                    //isAllDay: { from: "IsAllDay", type: "boolean" }
                }
            }
        }
    });


    /* 
    // dataSource1 üzerinden 0 konumundaki verinin title sını çeker.
    dataSource1.fetch(function () {
        var event = this.at(0);
        console.log("EVENT.TITLE : " + event.title);
    });
    */
};

function RandevuClick(value) {
    //console.log(value);
    RandevuId = $(value).find("#SecilenRandevuId")[0].innerHTML;
    //console.log(RandevuId);
    RandevuGetirById(RandevuId);
};

function ArayanClick(value)
{
    //console.log($("#tabstrip-randevulaaccessTokenible"));
    token = window.localStorage.getItem("accessToken");
    if (token === undefined || token === null || token === "")
        window.location = "index.html";
    scope = angular.element(document.getElementById("belediyeCTRL")).scope();

    ArayanId = $(value).find("#SecilenArayanId")[0].innerHTML;
    //console.log(ArayanId);

    $.ajax({
        type: "POST",
        data: { 'accessToken': token, SecilenArayanId: ArayanId },
        url: app.endpoints.arayanDetay,
        dataType: "json",
        crossDomain: true,
        success: function (result) {
            //console.log(result);
            if (result != null) {
                scope.$apply(function () {
                    scope.SecilenArayan = result.SecilenArayan;
                    window.location.href = "#ArayanDetay";
                });
                //Kullanıcı sadece readonly ise için gerekli setlemeler yetki bazında gerçekleşir.
                $("#arayan-detay-sonucekle").hide();
                $("#arayan-detay-sonuceklebtn").hide();
                if (window.localStorage.SadeceOkusun === "false") {
                    $("#arayan-detay-sonucekle").show();
                    $("#arayan-detay-sonuceklebtn").show();
                }
            }
            else {
                window.localStorage.removeItem("accessToken");
                window.location = "index.html";
            }
        },
        error: function () {
            alert("Arayan kişi seçilirken bir hata meydana geldi.");
        }
    });
};

function RandevuAciklamaEkle() {
    var BaskanAciklama = document.getElementById('AciklamaId').value;
    var RandevuAciklama = document.getElementById('RandevuAciklamaData').innerHTML;
    //console.log(BaskanAciklama);
    //console.log(RandevuId);
    //console.log(RandevuAciklama);

    if (BaskanAciklama.toString() == "" || BaskanAciklama == null ) {
        /*navigator.notification.alert("Kaydet butonuna basmadan önce Açıklama Yazınız!",
                 function () { }, "Veri Ekleme Hatası", 'Tamam');*/
        alert("Kaydet butonuna basmadan önce Açıklama Yazınız!");
    }
    else {
        $.ajax({
            type: "POST",
            data: { 'accessToken': token, SecilenRandevuId: RandevuId, BaskanAciklamasi: BaskanAciklama, MevcutRandevuAciklama: RandevuAciklama },
            url: app.endpoints.randevuDetayAciklama,
            dataType: "json",
            crossDomain: true,
            success: function (result) {
                //console.log(result);
                if (result != null) {
                    scope.$apply(function () {
                        scope.SecilenRandevu = result.SecilenRandevu;
                        //location.reload();
                        window.location.href = "#RandevuDetay";
                        
                    });
                }
                else {
                    window.localStorage.removeItem("accessToken");
                    window.location = "index.html";
                }
            },
            error: function () {
                alert("Randevu açıklama eklenirken bir hata meydana geldi.");
            }
        });
    }

};

function ArayanSonucEkle()
{
    var BaskanSonuc = document.getElementById('SonucId').value;
    var ArayanSonuc = document.getElementById('ArayanSonucData').innerHTML;
    //console.log(BaskanSonuc);
    //console.log(ArayanId);
    //console.log(ArayanSonuc);

    if (BaskanSonuc.toString() == "" || BaskanSonuc == null) {
        /*navigator.notification.alert("Kaydet butonuna basmadan önce Sonuç Yazınız!",
                 function () { }, "Veri Ekleme Hatası", 'Tamam');*/
        alert("Kaydet butonuna basmadan önce Sonuç Yazınız!");
    }
    else {
        $.ajax({
            type: "POST",
            data: { 'accessToken': token, SecilenArayanId: ArayanId, BaskanSonuc: BaskanSonuc, MevcutArayanSonuc: ArayanSonuc },
            url: app.endpoints.arayanDetayAciklama,
            dataType: "json",
            crossDomain: true,
            success: function (result) {
                //console.log(result);
                if (result != null) {
                    scope.$apply(function () {
                        scope.SecilenArayan = result.SecilenArayan;
                        //location.reload();
                        window.location.href = "#ArayanDetay";
                        
                    });
                }
                else {
                    window.localStorage.removeItem("accessToken");
                    window.location = "index.html";
                }
            },
            error: function () {
                alert("Arayan sonuç eklerken bir hata meydana geldi.");
            }
        });
    }
};

function tarihDuzenle(value) {
    /*var day;
    var month;
    var year = value.getFullYear(); 
    if ((value.getDate().toString().length > 1) && ((value.getMonth() + 1).toString().length > 1))
    {
        day = value.getDate();
        month = (value.getMonth() + 1);
    }
    else if ((!(value.getDate().toString().length > 1)) && ((value.getMonth() + 1).toString().length > 1))
    {
        day = "0" + value.getDate();
        month = (value.getMonth() + 1);
    }
    else if ((value.getDate().toString().length > 1) && (!((value.getMonth() + 1).toString().length > 1)))
    {
        day = value.getDate();
        month = "0" + (value.getMonth() + 1);
    }

    return (day + "." + month + "." + year);
    //var day = ("0" + value.getDate()).slice(-2);
    //var month = ("0" + (value.getMonth() + 1)).slice(-2);
    //var year = value.getFullYear();*/
    return (value).format("dd.mm.yyyy");
};

function tarihDuzenleFormataGore(value){
    if (value.toString().length > 10) {
        return tarihDuzenle(value);
    }
    return value;
};

//Date decrease :
function decreaseFromDate(tar) {
    var dateString = (tar).split('.');
    var date = new Date(dateString[2], parseInt(dateString[1]) - 1, dateString[0]);
    return (formatDate(addDays(date, -1)));
}

//Date increase :
function increaseFromDate(tar) {
    var fromDateString = (tar).split('.');
    var fromDate = new Date(fromDateString[2], parseInt(fromDateString[1]) - 1, fromDateString[0]);
    return (formatDate(addDays(fromDate, 1)));
}

function formatDate(date) {
    return ("00" + date.getDate()).slice(-"00".length) + '.' + ("00" + (date.getMonth() + 1)).slice(-"00".length) + '.' + date.getFullYear();
}

function addDays(date, days) {
    var today = new Date(date);
    var tomorrow = new Date();
    tomorrow.setTime(today.getTime() + (days * 24 * 60 * 60 * 1000));
    return tomorrow;
}

function getSaat(value) {
    return ((value.split(":"))[0]).trim();
};

function getDakika(value) {
    return ((value.split(":"))[1]).trim();
};

/*function getDate() {
    return scope.Tarih.split("-").reverse().join(".");
};*/

function getTarih() {
    //console.log("FETCH : " + tarihDuzenleFormataGore(scope.Tarih));
    return tarihDuzenleFormataGore(scope.Tarih);
};

function fetchData(accessToken) {
        //var data = { accessToken: accessToken };
        $.ajax({
            type: "POST",
            data: { 'accessToken': accessToken, Tarih: getTarih(), RandevuTipi: scope.RandevuTipi },
            url: app.endpoints.baskanView,
            dataType: "json",
            beforeSend: function () { app.application.showLoading(); },
            complete: function () {  app.application.hideLoading(); },
			crossDomain: true,
            success: function (result) {
                //console.log(result);
                if (result != null) {
                    scope.$apply(function () {
                        scope.Arayanlar = result.Arayanlar;
                        scope.Randevular = result.Randevular;
                    });
                }
                else {
                    window.localStorage.removeItem("accessToken");
                    window.location = "index.html";
                }
            },
            error: function () {
                alert("Veriler alınırken bir hata meydana geldi.");
            }
        });
    };

//tab select
function onSelect(e) {
    var item = $(e.item);
    //console.log(item);
    if (item.attr("id") === "arama") {
        $("#tarihList").prependTo("#tabstrip-aramalar");
        fetchData(token);
    }
    else if (item.attr("id") === "randevu") {
        var buttongroup = $("#select-resmi-ozel-bazinda").data("kendoMobileButtonGroup");
        if (buttongroup !== null || buttongroup !== undefinded) {
            if (scope.RandevuTipi === 1) { // Resmi
                buttongroup.select(0);
            }
            else if (scope.RandevuTipi === 2) { // Özel
                buttongroup.select(1);
            }
        }

        $("#tarihList").prependTo("#tabstrip-randevular");
        fetchData(token);
    }
    else if (item.attr("id") === "ajanda") {
        var buttongroup = $("#select2-resmi-ozel-bazinda").data("kendoMobileButtonGroup");
        if (buttongroup !== null || buttongroup !== undefinded) {
            if (scope.RandevuTipi === 1) { // Resmi
                buttongroup.select(0);
            }
            else if (scope.RandevuTipi === 2) { // Özel
                buttongroup.select(1);
            }
        }

        dataSource1.read();
        $("#scheduler").data("kendoScheduler").refresh();

        
       //$("#tarihList").prependTo("#tabstrip-ajanda");
        //fetchData(token);
        //ajandaRandevuFetchData(token);
    }
    /*else if (item.attr("id") === "geri") {
        $(document).on("click", "#geri", function () {
            window.history.back();
        });
    }*/
    else if (item.attr("id") === "cikis") {
        $.ajax({
            type: "POST",
            data: { '': token },
            url: app.endpoints.Cikis,
            dataType: "json",
            beforeSend: function () { app.application.showLoading(); },
            complete: function () {
                app.application.hideLoading();
                window.localStorage.removeItem("accessToken");
                window.location = "index.html";
            },
            crossDomain: true,
            success: function (result) {
            }
        });
    }
};

function ResmiOzelGoruntuleSelectShow() {
    
    // İlgili ekran çağrıldığında eğer daha önceden çağrılmışsa grid iki kere oluşturulmaz sadece grid içindeki veriler değiştirilir.
    if ($("#select-resmi-ozel-bazinda")[0].dataset.role !== "buttongroup") {
        $("#select-resmi-ozel-bazinda").kendoMobileButtonGroup({
            select: function (e) {
                if (e.index === 0) {                    //Resmi Randevular
                    scope.$apply(function () {
                        scope.RandevuTipi = 1;
                    });
                }
                else if (e.index === 1) {               // Özel Randevular
                    scope.$apply(function () {
                        scope.RandevuTipi = 2;
                    });
                }
                fetchData(token);
                dataSource1.read();
                $("#scheduler").data("kendoScheduler").refresh();
            },
            index: 0
        });
    }

    // İlgili ekran çağrıldığında eğer daha önceden çağrılmışsa grid iki kere oluşturulmaz sadece grid içindeki veriler değiştirilir.
    if ($("#select2-resmi-ozel-bazinda")[0].dataset.role !== "buttongroup") {
        $("#select2-resmi-ozel-bazinda").kendoMobileButtonGroup({
            select: function (e) {
                if (e.index === 0) {                    //Resmi Randevular
                    scope.$apply(function () {
                        scope.RandevuTipi = 1;
                    });
                }
                else if (e.index === 1) {               // Özel Randevular
                    scope.$apply(function () {
                        scope.RandevuTipi = 2;
                    });
                }
                fetchData(token);
                dataSource1.read();
                $("#scheduler").data("kendoScheduler").refresh();
            },
            index: 0
        });
    }
}