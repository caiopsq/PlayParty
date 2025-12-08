import callApi from "./ApiCall";

export default function callWpp(item=null) {
    var mensagem = `Olá! Gostaria de um orçamento para aluguél de ${(item)? item : "alguns itens"}. Poderia me passar mais detalhes?`;
    var numero = "5561992149916";
    var link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    callApi((item)? item : "Home");
    window.open(link, '_blank');
}