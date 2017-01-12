import { Component } from '@angular/core';

import {CursosService} from './cursos.service';

@Component( {
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
})
export class CursosComponent {
    nomeCurso = 'loiane.groner';
    cursos = [''] ;

    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }
}