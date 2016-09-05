import { Component } from '@angular/core';

@Component({
    styleUrls: ['./app/common/navbar/navbar.css'],
    selector: 'navbar',
    template: `
    <nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="./assets/images/logo_transempregos_final.svg" /></a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><strong>SOBRE</strong></a></li>
            <li><a href="#"><strong>CADASTRAR CURRÍCULO</strong></a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><strong>ENTRAR</strong><span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#"><strong class="h4">Candidato(a)</strong></a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#"><strong class="h4">Recurtador(a)</strong></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
})
export class NavBarComponent { }