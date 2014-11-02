meteor-cashbook
===============

CashBook app created in Meteor

This is an app to keep track of cash across multiple locations ("point-of-cash" or poc).
All cash transactions are recorded in the respective poc.
There are 4 types of cash trasactions: receipt, payment, advance, transfer (to another poc).
There are three types of user roles: staff, head, superuser and admin.
'Staff' can only record trasactions at their poc only.
'Head' can manipulate trasactions at their poc only, and has access to the 'local net cash balance' (lncb).
'Superuser' can record and manipulate transactions across all pocs, and has access to lncb and gncb (global net cash balanace).
'Admin' can take care of user account management only.
