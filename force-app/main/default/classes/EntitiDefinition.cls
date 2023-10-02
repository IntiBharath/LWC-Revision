public with sharing class EntitiDefinition {
    
    @AuraEnabled(Cacheable=true)
    public static List<EntityDefinition> getEntityRecords(){
        return [SELECT DeveloperName,LastModifiedBy.Name FROM EntityDefinition WHERE LastModifiedDate=THIS_YEAR];
    }
}