import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  titulo = 'Tela de Login';
  usuario = '';
  senha = '';
  erro: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  textoDigitado(texto: any) {
    console.log(texto);
  }

  entrar() {
    // Verifica se as credenciais são válidas
    if (this.usuario === 'admin' && this.senha === 'admin') {
      // Define o usuário logado no UsuarioService
      this.usuarioService.setUsuarioLogado({ nome: 'Admin', email: this.usuario });

      // Redireciona para a rota de clientes
      this.router.navigate(['/clientes']);
    } else {
      // Exibe a mensagem de erro se as credenciais estiverem incorretas
      this.erro = true;
    }
  }
}
