# Asgn

ng serve | npm run start

master --> 

dev (updated) --> lazyloading and virtual scroll

used ng2 charts(chart.js) for building the pie chart.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.13.


1) Login page --> localhost:4200 enter email and valid pass word click on login It will redirect to home page;
2) Used reactive forms and disabled login button till the credentials are valid. If credentials are valid only user can move forward to home page
3) In home page 2 columns
         Left page --> Loaded person list (will load 10 persons only implemented cdk virtual scroll; on scroll it will load remaining)
                               Sortable First name, Last name --> click on columns first name or last name to sort 
                               Delete Button 
                               Edit Button 
                               Used parent component variable as single source of data; Passed data to with services (subjects)
 4)       Right side column --> 
                              Used ng2 charts/ chart.js
                               Chart data is loaded from observable so when ever data changes it will reflect in chart component. 
                               Pie Chart age >0 to < 18 , age >= 18 and < 60, age <= 60


++ Used Reactive forms for login
++ Used Lazy loading 
