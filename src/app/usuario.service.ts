// usuario.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioLogadoSubject = new BehaviorSubject<{ nome: string; email: string } | null>(null);

  // Método para definir o usuário logado
  setUsuarioLogado(usuario: { nome: string; email: string }) {
    this.usuarioLogadoSubject.next(usuario); // Atualiza o BehaviorSubject com o novo usuário
  }

  // Método para obter o observable do usuário logado
  getUsuarioLogado(): Observable<{ nome: string; email: string } | null> {
    return this.usuarioLogadoSubject.asObservable(); // Retorna um observable para monitorar mudanças
  }

  // Método para limpar os dados do usuário ao fazer logout
  limparUsuarioLogado() {
    this.usuarioLogadoSubject.next(null); // Limpa o usuário logado
  }
}
