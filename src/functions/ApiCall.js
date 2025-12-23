import locationFinder from "./Location";

export default function callApi(item){
    var localizacaoUsuario = locationFinder();
    console.log(localizacaoUsuario);
    fetch(`https://api-vercel-navy-nine.vercel.app/playparty/whatsapp`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "data": "", "local": item, "localizacao": localizacaoUsuario }),
    });
}
