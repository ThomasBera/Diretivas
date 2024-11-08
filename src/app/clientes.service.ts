import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  varGlobal: string = 'valor global';
  link: string = 'http://localhost:3000/clientes';

  constructor() { }

  // Retorna todos os clientes como uma Promise
  getClientes(): Promise<any[]> {
    return fetch(this.link)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Erro ao buscar clientes: ${res.statusText}`);
        }
        return res.json();
      });
  }

  // Adiciona um novo cliente e retorna uma Promise
  setCliente(cliente: any): Promise<any> {
    return fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erro ao adicionar cliente: ${res.statusText}`);
      }
      return res.json();
    });
  }

  // Atualiza um cliente e retorna uma Promise
  atualizaCliente(id: number, cliente: any): Promise<any> {
    return fetch(`${this.link}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erro ao atualizar cliente: ${res.statusText}`);
      }
      return res.json();
    });
  }

  // Exclui um cliente e retorna uma Promise
  excluiCliente(id: number): Promise<any> {
    return fetch(`${this.link}/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erro ao excluir cliente: ${res.statusText}`);
      }
      return res.json();
    });
  }
}
