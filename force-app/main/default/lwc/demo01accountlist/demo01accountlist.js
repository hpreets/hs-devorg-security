import { LightningElement, wire } from 'lwc';

import accountList from '@salesforce/apex/AccountLWCHelper.fetchAccountList';

const columns = [
    {label: "Name", fieldName: "Name"},
    {label: "Account Number", fieldName: "AccountNumber"},
    {label: "Website", fieldName: "Website", type: "url"},
    {label: "Phone", fieldName: "Phone", type: "phone"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type:"currency"},
    {label: "SLA", fieldName: "SLA__c"},
    {label: "SLA Expiration Date", fieldName: "SLAExpirationDate__c", type:"date"},
];
export default class Demo01accountlist extends LightningElement {

    @wire(accountList)
    account;

    columns = columns;
    selAccounts = 'Test';

    getSelectedAccount(event) {
        const selRows = event.detail.selectedRows;
        this.selAccounts = '';
        for (let ctr=0; ctr<selRows.length; ctr++) {
            this.selAccounts += ('' + selRows[ctr].Name + '-' + selRows[ctr].Id + ',');
        }
    }
}