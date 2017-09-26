import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
	selector: 'app-values',
	templateUrl: './values.component.html',
	styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
	values: Array<string>;

	constructor(private service: ValuesService) {
		this.service.getAll().subscribe(x => this.values = x);
	}

	ngOnInit() {
	}

}
