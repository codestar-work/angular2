import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	template: `<h1>Hello {{name}}</h1>`
})
export class Main {
	constructor() {
		this.name = 'Angular'
	}
}
