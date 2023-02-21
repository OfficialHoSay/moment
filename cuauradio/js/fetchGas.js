function getPage() {
var xmlhttp;
if (window.XMLHttpRequest)
{
  xmlhttp = new XMLHttpRequest();
}
xmlhttp.open("GET","https://petrointelligence.com/api/api_precios.html?consulta=nac",true);
xmlhttp.send();
};
getPage();