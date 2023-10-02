public with sharing class Account_Example {
    @AuraEnabled(Cacheable=true)
    public static list<Account> getAccountRecords(){
        return [Select Id,name,rating from Account limit 5];
    }

    @AuraEnabled(Cacheable=true)
    public static list<Account> getFilteredAccount(String rating){
        return [Select Id,Name,rating from Account where rating=:rating];
    }

    @AuraEnabled(Cacheable=true)
    public static list<Account> findAccounts(String searchText){
        String query ='Select Id,Name,Rating from Account where Name Like \'%';
        query= query+searchText;
        query= query+'%\'';
    
        return Database.query(query);
    }
    
}