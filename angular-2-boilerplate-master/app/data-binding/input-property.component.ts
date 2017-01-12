import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cursos',
    template: '{{nomeCurso}}'//,
    //inputs: ['nomeCurso:nome']
})
export class InputPropertiesComponent {
    @Input('nome') nomeCurso = ''
}