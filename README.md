# drf_sample
Django + DjangoRestFramework + AngularJS 

Followed this tutorial : http://engineroom.trackmaven.com/tag/angularjs/

I added the requirements.txt as on the django side I added an extra library django-cors-headers to get the data 
to actually display to the page. This was done at the end of the tutorial as I saw in the comments others ran into the same issue.

The solution was found here: https://github.com/ottoyiu/django-cors-headers

But you can install it whenever via pip.

On the django side I wouldn't use localhost:8000 I would designate your own. 
IE: ./manage.py runserver 0.0.0.0:9802 (your local IP + port of choice) 
I find more often than not localhost:8000 is being used by something else.

You would want to change whatever host and port you go with in the files: chain.service.js, store.service.js, and employee.service.js.

So to get running you would need 2 terminal windows open.

For the angular side: /drf_sample/client$ node server.js

For the django side: /drf_sample/server$ ./manage.py runserver 0.0.0.0:9802

But you will learn that in the tutorial. :)
