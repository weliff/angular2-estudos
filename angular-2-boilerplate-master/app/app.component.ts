import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Olá Mundo!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
        <exemplo-data-binding></exemplo-data-binding>
        <view-child></view-child>
    `,
})
export class AppComponent { }
