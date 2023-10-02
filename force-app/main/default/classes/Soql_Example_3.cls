/*Write a query to fectch 10 account records
 Create a list which will store those accounts whose rating is hot.
 Display one by once account
*/
public with sharing class Soql_Example_3 {
    public List<Account> accs {set;get;}
    Public List<Account> hotAccounts {set;get;}
    public Soql_Example_3() {
         accs = [Select Id,Name,Phone,Rating from Account];
         hotAccounts = new List<Account>();
         try{
            for(Account a: accs){
                if(a.rating =='Warm'){
                    hotAccounts.add(a);
                }
            }    
         }catch(Exception e){
            System.debug('Cause: '+e.getCause());
            System.debug('LineNumber: '+e.getLineNumber());
            System.debug('Error Message: '+e.getMessage());
            System.debug('Stack Trace: ' +e.getStackTraceString());
            System.debug('Error Type: '+e.getTypeName());
         }
    }
}