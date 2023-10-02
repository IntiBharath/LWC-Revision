trigger AccountHandler on Account (before insert,before Update) {

 
    //New Account Duplicate checks
    If(trigger.isBefore && trigger.isInsert){
    Account_Trigger_Handler.beforeInsert(trigger.new);
    }

    //Change account ownership to Suryanarayana if rating is equal to Hot
    If(trigger.isBefore && trigger.isUpdate){
    Account_Trigger_Handler.beforeUpdate(trigger.new);
    }

}