public with sharing class Account_Trigger_Handler {


//New Account records which you are trying to insert
 public static void beforeInsert(List<Account> accs){
    set<string> setNames = new set<string>();
    for(Account a:accs){
        setNames.add(a.Name);
    }

// checking for duplicates with the existing Account records
    List<Account> accounts =[select name from Account where name IN:setNames];
    If(accounts.size()>0){
        for(Account a: accs){
            a.addError('Duplicate Record Found');
        }
    }
 }

 //Whenever rating is equal to Hot change the Ownership to Suryanarayana
 public static void beforeUpdate(List<Account> accounts){
    User u =[Select id from user where name like '%Surya%'];
    for(Account a:accounts){
        if(a.rating=='Hot'){
            a.ownerId=u.id;
            a.industry='Banking';
        }
    }

 }
}