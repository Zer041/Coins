import { Injectable } from '@angular/core';
import * as Blockchain from 'node_modules/workspace/Blockchain';
import * as Transaction from 'node_modules/workspace/Transaction';

//import { Block } from 'node_modules/workspace/Block';
import EC from "elliptic";

@Injectable({
  	providedIn: 'root'
})
export class BlockchainService {
	public blockchainInstance = new Blockchain();
	public transactionInstance = new Transaction();

	public walletKeys = [];

	constructor() { 
		//alert("hola");
		this.blockchainInstance.difficulty = 3;
		this.blockchainInstance.minePendingTransactions('my-wallet-address');
		this.blockchainInstance.minePendingTransactions('my-wallet-address');
		//this.blockchainInstance.minePendingTransactions('asdasd');
		//this.blockchainInstance.minePendingTransactions('asdasdd');
		this.generateWalletKeys();		
	}


	getBlocks() {
		return this.blockchainInstance.chain;
	}


	addTransaction(tx) {
		this.blockchainInstance.addTransaction(tx);
	}


	getPendingTransactions() {
		return this.blockchainInstance.returnPendingTransactions();
	}


	minePendingTransactions() {
		let mining = true;

		this.blockchainInstance.minePendingTransactions(
			this.walletKeys[0].publicKey
		);
	}


	getAddressBalance(address) {
		return this.blockchainInstance.getAddressBalance(address);

	}

	generateWalletKeys() {
		const ec = new EC.ec('secp256k1');
		const key = ec.genKeyPair();

		this.walletKeys.push({
			keyObj: key,
			publicKey: key.getPublic('hex'),
			privateKey: key.getPrivate('hex'),
		});

		console.log(this.walletKeys);
	}
}
