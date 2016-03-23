# pushService plugin for Snaphy


###A plugin for adding push service

###This plugin is exposed on  `/pushService` route


for more info : https://docs.strongloop.com/display/public/LB/Push+notifications
```
	$npm install  loopback-component-push --save
	
   //In server/datasources.json
   "db": {
      "connector": "mongodb",
      "url": "mongodb://demo:L00pBack@demo.strongloop.com/demo"
   },
   "push": {
     "name": "push",
     "connector": "loopback-component-push",
     "installation": "installation",
     "notification": "notification",
     "application": "application"
   }


   //Create  models installation, application, notification and push.
   //Now add models and GCM key detail to package.json file

}
```





####Written by Robins Gupta

