public with sharing class Soql_With_Like_Example_6 {
    public String name {set;get;}
    public String stageName {set;get;}
    public String query {set;get;}
    public List<Opportunity> opptys {set;get;}
    public void search(){
        query ='Select Id,AccountId,Name,StageName,closeDate,Amount from Opportunity';
        if(name !='' && stageName !=''){
            query = query+' where name Like \'%'+name+'%\' AND stageName =\''+stageName+'\'';
        }else if(name !=''){
            query =query+' where name Like \'%'+name+'%\'';
        }else if(stageName !=''){
            query = query+' where stageName =\''+stageName+'\'';
        }
        opptys = Database.query(query);
    }
}