trigger optyUpdate on Opportunity (before update) {
 OpportunityHandler.beforeUpdate(trigger.oldMap,trigger.newMap);
}