import { LightningElement, wire } from 'lwc';

// https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules
import accountList from '@salesforce/apex/AccountLWCHelper.fetchAccountList';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account #', fieldName: 'AccountNumber' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    { label: 'SLA', fieldName: 'SLA__c' },
    { label: 'SLA Expiration Date', fieldName: 'SLAExpirationDate__c', type: 'date' },
];


export default class Accountlist extends LightningElement {
    // data = [];
    columns = columns;
    selAccounts; // to show data binding

    // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_decorators
    // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_wire_method
    @wire(accountList)
    accounts;

    getSelectedAccount(event) {
        const selRows = event.detail.selectedRows;
        this.selAccounts = '';
        for (let ctr=0; ctr<selRows.length; ctr++) {
            this.selAccounts += (selRows[ctr].Name + ' (' + selRows[ctr].Id + '), ');
        }
    }

}