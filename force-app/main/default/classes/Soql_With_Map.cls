/* Create a Soql to fetch five opportunity records
Create a map with opportunityId as key and opportunity as value
Fetch all the opportunity ids and print
Fetch all the values from the map and print*/

public with sharing class Soql_With_Map {
    public List<Opportunity> opptys{set;get;}
    public Map<Id,Opportunity> opptyMap {set;get;}
    public Set<Id> keys;
    public List<Opportunity> opportunities;

    public Soql_With_Map() {
        opptys =[select id,name,stageName,closeDate from Opportunity limit 5];
        opptyMap = new Map<Id,Opportunity>();
        try{ 
        for(Opportunity op: opptys){
            opptyMap.put(op.id,op);
        }
      }catch(Exception e){
        System.debug('Line Number: '+e.getLineNumber());
        System.debug('Error Message: '+e.getMessage());
      }
      
      keys = opptyMap.Keyset();
      opportunities = opptyMap.values();

    }
}