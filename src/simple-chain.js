import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value)) || this.chain.push("");	
		return this;
  },
  removeLink(position) {
    if (typeof position !== "number") {
			this.chain = [];
			throw new Error('You can\'t remove incorrect link!');

		} else {

			if (this.chain[position - 1] === undefined) {
				this.chain = [];
				throw new Error('You can\'t remove incorrect link!');
		} else {
			this.chain.splice(position - 1, 1);
				
		}

		}

		
		return this;
  },
  reverseChain() {
    this.chain.reverse();
		return this;
  },
  finishChain() {
    let strOut = [];

		this.chain.forEach((item,index,array)=>{

			strOut.push("( "+item+" )");

		})

		this.chain = [];
		return strOut.join("~~");
  }
};
