import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import * as Shamir from 'node_modules/workspace/Shamir';

@Component({
  	selector: 'app-shamir-secrets',
  	templateUrl: './shamir-secrets.component.html',
  	styleUrls: ['./shamir-secrets.component.scss']
})
export class ShamirSecretsComponent implements OnInit {
	public data;
	public shares;
	public theshold;
	public showShares = [];
	public shamirInstance = new Shamir()

	constructor(private blockchainService: BlockchainService) {
  		// = blockchainService.splitIntoShares(this.data, this.shares, this.theshold);
  		//this.createShares;
  	}

  	ngOnInit() {
  	}

  	createShares() {
  		this.showShares = this.shamirInstance.splitData(this.data, this.shares, this.theshold);
  		//this.showShares = [];
  	}

}
