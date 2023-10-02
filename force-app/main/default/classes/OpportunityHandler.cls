public with sharing class OpportunityHandler {
   public static void beforeUpdate(Map<Id,Opportunity> oldMap,Map<Id,Opportunity> newMap){
    set<Id> keys = oldMap.keyset();
     
    for(Id key:keys){
         opportunity oldOpty = oldMap.get(key);
         opportunity newOpty = newMap.get(key);
        if(oldOpty.StageName !='Closed Won' && newOpty.StageName=='Closed Won'){
          newOpty.closeDate=System.today();
          System.debug(newOpty.Id);
       }
     }

  }
}