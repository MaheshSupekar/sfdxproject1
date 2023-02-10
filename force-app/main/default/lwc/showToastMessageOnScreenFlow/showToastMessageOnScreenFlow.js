import { LightningElement, api } from 'lwc';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';
import labelName from '@salesforce/label/c.SecureLabel1';

export default class ShowToastMessageFlow extends LightningElement {
    @api title = '';
    label1 = labelName;

    connectedCallback() {
        this.dispatchEvent(new FlowNavigationFinishEvent());
        this._showToast();
    }

    _showToast() {
      console.log('title'+this.title);
      console.log('label1'+this.label1);
    }
}