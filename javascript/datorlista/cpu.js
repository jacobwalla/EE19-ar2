const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

knapp.addEventListener("click", function () {

    var namn = rutaNamn.value;

    var cpu = meny.value;

    if (cpu == "amd5") {
        lista.innerHTML = "<li>" +
            "AMD Ryzen 5 3600 3.6 GHz 35MB" +
            "6-kärnig processor från AMD" +
            "Med snabbare hastigheter mer minne och bandbredd än den tidigare generationen sätter den tredje generationens Ryzen-processorer från AMD standarden för hög prestanda" +
            "</li>";
    }


});