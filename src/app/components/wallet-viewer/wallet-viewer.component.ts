import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';


@Component({
  	selector: 'app-wallet-viewer',
  	templateUrl: './wallet-viewer.component.html',
  	styleUrls: ['./wallet-viewer.component.scss']
})
export class WalletViewerComponent implements OnInit {
	
	@Input() public address;

	constructor(private blockchainService: BlockchainService) { 

	}

  	ngOnInit() {
  	}

}
