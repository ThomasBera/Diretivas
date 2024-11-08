// rodape.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {
  usuarioLogado: { nome: string; email: string } | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Assina o observable do usuário logado para receber atualizações
    this.usuarioService.getUsuarioLogado().subscribe(usuario => {
      this.usuarioLogado = usuario; // Atualiza o usuário logado no componente
    });
  }
}
