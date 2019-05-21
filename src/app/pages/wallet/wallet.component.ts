import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  	selector: 'app-wallet',
  	templateUrl: './wallet.component.html',
  	styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
	public address;
	public balance;

	constructor(private blockchainService: BlockchainService) {
		this.balance = blockchainService.getAddressBalance(this.address);
		

  	}


  	getBalance() {
		this.balance = this.blockchainService.getAddressBalance(this.address);
		console.log(this.balance);
  		return this.balance;

  	}
  	

  	ngOnInit() {
  	}

}
