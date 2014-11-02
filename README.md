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

--- ** The algorithm for the CashBook Web App ** ---

01. Present the 'login' screen.
02. Once user logs in, he is taken to 'dashboard' screen.
03. The 'dashboard' screen presented depends on the user's role. 
	{
	To keep things simple, we will assume only three kinds of roles: 'normal', 'superuser' and 'admin'.
	'normal': has access to only the poc designated to him.
	'superuser': has access to all pocs.
	'admin': can create new users and allocate roles to them.
	}
	So, there will be three different dashboards: normal dashboard, superuser dashboard and admin dashboard.
04. a)	Inside a normal dashboard, users can CRUD 'xactions' and check
		the local_net_cash_balance ('lncb');
	b)	Inside a superuser dashboard, users first choose the poc and
		then CRUD xactions; they can check both the 'lncb' as well as the 'gncb' (global_net_cash_balance)
	c)	The admin dashboard only allows allocation, modification and
		deletion of user roles; no CRUD xactions are allowed to the admin user.
05. All dashboards allow the user to logout at any point.

