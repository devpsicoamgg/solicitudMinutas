function doGet() {
  var template = HtmlService.createTemplateFromFile('Minutas');
  template.pubUrl = "https://script.google.com/macros/s/AKfycbzNRN-NOhwD25ryyXQH7DV1ZhRdQkiRAsndP5m_Rx6hijnBYRUB8t0grMSMQQscW-bi/exec"
  var output = template.evaluate();
  return output;
}


function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName)
  .getContent()
}



function doPost (e) {
var SS = SpreadsheetApp.getActiveSpreadsheet();
var sheetMinutasFiles = SS.getSheetByName('minutasFiles')



var numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

var id = e.parameter.cdi + "-" + e.parameter.semana + "-" + e.parameter.mesPedido + "-" + numeroAleatorio + "-";
var cdi = e.parameter.cdi;
var semana = e.parameter.semana;
var fechaPedido = e.parameter.fechaPedido;
var responsable = e.parameter.responsable;
var cupo1a5 = e.parameter.cupo1a5;
var cupo6a11 = e.parameter.cupo6a11;
var diasAtencion = e.parameter.diasAtencion;
var mesPedido = e.parameter.mesPedido;
var aceiteVegetalPedido = e.parameter.aceiteVegetalPedido;
var arrozPedido = e.parameter.arrozPedido;
var arvejaSecaPedido = e.parameter.arvejaSecaPedido;
var avenaPedido = e.parameter.avenaPedido;
var azucarPedido = e.parameter.azucarPedido;
var bienestarinaPedido = e.parameter.bienestarinaPedido;
var frijolCargamantoPedido = e.parameter.frijolCargamantoPedido;
var harinaMaizenaPedido = e.parameter.harinaMaizenaPedido;
var harinaTrigoPedido = e.parameter.harinaTrigoPedido;
var lentejasPedido = e.parameter.lentejasPedido;
var pastasAlimenticiasPedido = e.parameter.pastasAlimenticiasPedido;
var salPedido = e.parameter.salPedido;
var carneMolidaResPedido = e.parameter.carneMolidaResPedido;
var carnePicarPedido = e.parameter.carnePicarPedido;
var higadoPedido = e.parameter.higadoPedido;
var pechugaPolloPedido = e.parameter.pechugaPolloPedido;
var huevoPedido = e.parameter.huevoPedido;
var acelgaPedido = e.parameter.acelgaPedido;
var aguacatePedido = e.parameter.aguacatePedido;
var ajoPedido = e.parameter.ajoPedido;
var bananoPedido = e.parameter.bananoPedido;
var cebollaCabezonaPedido = e.parameter.cebollaCabezonaPedido;
var cebollaJuncaPedido = e.parameter.cebollaJuncaPedido;
var espinacasPedido = e.parameter.espinacasPedido;
var fresaPedido = e.parameter.fresaPedido;
var guatilaPedido = e.parameter.guatilaPedido;
var habichuelaPedido = e.parameter.habichuelaPedido;
var lechugaComunPedido = e.parameter.lechugaComunPedido;
var limonPedido = e.parameter.limonPedido;
var mandarinaPedido = e.parameter.mandarinaPedido;
var mangoPedido = e.parameter.mangoPedido;
var melonPedido = e.parameter.melonPedido;
var naranjaPedido = e.parameter.naranjaPedido;
var papaPedido = e.parameter.papaPedido;
var papaCriollaPedido = e.parameter.papaCriollaPedido; 
var papayaPedido = e.parameter.papayaPedido;
var patillaPedido = e.parameter.patillaPedido;
var pepinoPedido = e.parameter.pepinoPedido;
var pinaPedido = e.parameter.pinaPedido;
var platanoHartonPedido = e.parameter.platanoHartonPedido;
var platanoMaduroPedido = e.parameter.platanoMaduroPedido;
var platanoVerdePedido = e.parameter.platanoVerdePedido;
var remolachaPedido = e.parameter.remolachaPedido;
var tomateChontoPedido = e.parameter.tomateChontoPedido;
var tomateGuisoPedido = e.parameter.tomateGuisoPedido;
var yucaPedido = e.parameter.yucaPedido;
var zanahoriaPedido = e.parameter.zanahoriaPedido;
var kumisPedido = e.parameter.kumisPedido;
var lechePedido = e.parameter.lechePedido;
var mantequillaPedido = e.parameter.mantequillaPedido;
var quesoPedido = e.parameter.quesoPedido;
var quesoCampesinoPedido = e.parameter.quesoCampesinoPedido;
var yogurtPedido = e.parameter.yogurtPedido;
var calaoPedido = e.parameter.calaoPedido;
var galletaLechePedido = e.parameter.galletaLechePedido;
var galletaSodaPedido = e.parameter.galletaSodaPedido;
var galletaSodaDulcePedido = e.parameter.galletaSodaDulcePedido;
var mogollaPedido = e.parameter.mogollaPedido;
var panBlancoPedido = e.parameter.panBlancoPedido;
var panRolloPedido = e.parameter.panRolloPedido;
var panTajadoPedido = e.parameter.panTajadoPedido;
var ponqueTortaPedido = e.parameter.ponqueTortaPedido;
var tostadaPedido = e.parameter.tostadaPedido;
var certifico = e.parameter.certifico;

sheetMinutasFiles.appendRow([id, cdi,	semana,	fechaPedido,	responsable,	cupo1a5,	cupo6a11,	diasAtencion,	mesPedido, 	aceiteVegetalPedido,	arrozPedido,	arvejaSecaPedido,	avenaPedido,	azucarPedido,	bienestarinaPedido,	frijolCargamantoPedido,	harinaMaizenaPedido,	harinaTrigoPedido,	lentejasPedido,	pastasAlimenticiasPedido,	salPedido,	carneMolidaResPedido,	carnePicarPedido,	higadoPedido,	pechugaPolloPedido,	huevoPedido, acelgaPedido, aguacatePedido, ajoPedido,	bananoPedido,	cebollaCabezonaPedido,	cebollaJuncaPedido,	espinacasPedido,	fresaPedido,	guatilaPedido,	habichuelaPedido,	lechugaComunPedido,	limonPedido,	mandarinaPedido,	mangoPedido,	melonPedido,	naranjaPedido,	papaPedido,		papaCriollaPedido, papayaPedido,	patillaPedido,	pepinoPedido,	pinaPedido, platanoHartonPedido,	platanoMaduroPedido,	platanoVerdePedido,	remolachaPedido,	tomateChontoPedido,	tomateGuisoPedido, yucaPedido,	zanahoriaPedido,	kumisPedido,	lechePedido, mantequillaPedido, quesoPedido, quesoCampesinoPedido,	yogurtPedido,	calaoPedido,	galletaLechePedido,	 galletaSodaPedido, galletaSodaDulcePedido,	mogollaPedido,	panBlancoPedido,	panRolloPedido,	panTajadoPedido,	ponqueTortaPedido, tostadaPedido,	certifico,
])
return HtmlService.createTemplateFromFile('PedidoEnviado').evaluate();
}