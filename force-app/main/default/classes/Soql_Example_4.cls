public with sharing class Soql_Example_4 {
    public Integer size{set;get;}
    public List<Account> accounts {set;get;}
    public Soql_Example_4(){
        accounts =[Select Id,Name,Phone,Rating from Account];

    }
    public void fetchData(){
        accounts =[Select Id,Name,Phone,Rating from Account limit :size];

    }
}