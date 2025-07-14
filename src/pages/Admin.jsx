import { useState } from 'react';

export default function Admin() {
  const [clients, setClients] = useState([
    { name: 'Loja X', status: 'Ativo', cobrança: 'R$200/mês' },
    { name: 'Empresa Y', status: 'Inativo', cobrança: 'R$0' }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Painel Administrativo</h1>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th>Cliente</th>
            <th>Status</th>
            <th>Cobrança</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c, i) => (
            <tr key={i} className="border-b">
              <td>{c.name}</td>
              <td>{c.status}</td>
              <td>{c.cobrança}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}