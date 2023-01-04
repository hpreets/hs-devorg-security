/*
###########################################################################
# Created by............: Harpreet Singh (OSI)
# Created Date..........: 01-Jan-2022
# Last Modified by......:
# Last Modified Date....:
# Description...........: Class containing helper methods for accountlist LWC component
# Test Class............: TBD
# Change Log:
#
############################################################################
*/
public with sharing class AccountLWCHelper {

    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountList() {
        Integer recordsLimit = 25;
        List<Account> accList = [SELECT Id, Name, AccountNumber, Website, Phone, AnnualRevenue, SLA__c, SLAExpirationDate__c FROM Account LIMIT :recordsLimit];
        return accList;
    }






















    /* @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountListWithCondition(SearchFilter filter) {
        String whereCondition = '';
        if (filter != null) {
            List<String> conditions = new List<String>();
            if (filter.industry != null) conditions.add(' Industry = \'' + filter.industry + '\'');
            if (filter.type != null) conditions.add(' Type = \'' + filter.type + '\'');
            if (filter.rating != null) conditions.add(' Rating = \'' + filter.rating + '\'');
            if (filter.annualRevenue != null) conditions.add(' AnnualRevenue < ' + filter.annualRevenue + ' AND AnnualRevenue >= ' + filter.annualRevenue);

            if (conditions.size() > 0) {
                whereCondition = ' WHERE ';
                for (String condition : conditions) {
                    whereCondition += condition + ' AND ';
                }
            }
        }

        String qry = 'SELECT Id, Name, Rating FROM Account ' + whereCondition;
        List<Account> accList = Database.query(qry);
        return accList;
    }

    public class SearchFilter {
        public String searchText {get; set;}
        public String industry {get; set;}
        public String type {get; set;}
        public String rating {get; set;}
        public Double annualRevenue {get; set;}
    } */
}
