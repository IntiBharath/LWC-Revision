public with sharing class List_Example_1 {
    public List<Account>accounts {set;get;}
    public List_Example_1() {
        accounts = new List<Account>();
        Account a1 = new Account();
        a1.Name='Bharath';
        a1.phone='+91 9493880834';
        Account a2 = new Account();
        a2.Name='Salaar';
        a2.phone='+983647338';
        accounts.add(a1);
        accounts.add(a2);
    }
}