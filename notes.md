### Backup of the relational version, where data from other users are changed every transaction interaction.

    This version contains the interaction of USERS.

When an user makes a transaction, the following rules apply:

1. User can only transfer money to other mocked users. It is impossible to send a PIX when the key or bank details are not registered in the db.json file (local database);
2. When a transaction is made, the amount will either be added or removed from the destinated/original account. For example, if Ana registers a transaction of 100 BRL to Bruno, the amount of 100 BRL will be deducted from Ana's account and added to Bruno's

Important notes before the backup was created:

1. Only "Loan" has received the new DELETE and UPDATE features, whereas the other transaction methods have not.
2. To use this branch's version, you might want to remove the DELETE and UPDATE feature since it does not make much sense for the purpose of this solution.

This version has been discontinued for indetermined time in order to attend to the project's main goal.
This version is more related to a bank application other than just a notion/organization APP.
