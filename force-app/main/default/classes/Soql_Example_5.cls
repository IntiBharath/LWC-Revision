public with sharing class Soql_Example_5 {
  public List<Account> accounts {set;get;}
  public String searchText {set;get;}

  public void searchTextInfo(){
    accounts=[Select Id,Name,Phone,Rating from Account Where Rating=:searchText];
  }

  //When you want to refer apex variable value in a query, You have to split the query in Dynamic
  public void likeSearch(){
    String query = 'Select Id,Name,Phone,Rating from Account Where Name Like \'%';
    query = query+searchText+'%\'';
    accounts=Database.query(query);
  }
    
}