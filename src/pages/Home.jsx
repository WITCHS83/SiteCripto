import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
      .then(res => setPrice(res.data.bpi.USD.rate))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Serviços de Instalação de Pagamento com Bitcoin</h1>
      <p className="mb-4">Oferecemos integração completa para aceitar pagamentos com Bitcoin em seu estabelecimento comercial.</p>
      <div className="my-4">
        <h2 className="text-xl font-semibold">Cotação Atual do Bitcoin:</h2>
        <p className="text-2xl">{price ? `$${price}` : 'Carregando...'}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Sobre o Bitcoin</h2>
        <p className="mt-2">Bitcoin é uma criptomoeda descentralizada que permite transações seguras e rápidas sem intermediários.</p>
        <p className="mt-2">Ao integrar Bitcoin em seu negócio, você atrai novos clientes e reduz taxas bancárias.</p>
      </div>
    </div>
  );
}