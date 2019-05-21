import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from 'node_modules/@angular/forms';


@Component({
  	selector: 'app-settings',
	templateUrl: './settings.component.html',
  	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	public blockchain;
	// DI
    constructor(private blockchainService: BlockchainService) { 
    	this.blockchain = blockchainService.blockchainInstance;
    }

  	ngOnInit() {
  	}

}
