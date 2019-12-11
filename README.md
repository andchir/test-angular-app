
## Angular Example

Premature unsubscribing in RXJS is not always good!  
There may be times when you do not need to unsubscribe and cancel request (unsubscribing itself in any case occurs in Angular HttpClient after completion or error), but rather wait for the server to respond.  
If the server is experiencing difficulties, then you will avoid repeating difficult requests and help not to finish the server.  
**When you cancel a client-side request, you do not cancel the server-side operation.** Just keep that in mind.

Compile in dev mode:
~~~
ng build --baseHref="/bundle-dev/" --deployUrl="/bundle-dev/" \
--outputPath="../htdocs/bundle-dev" --watch=true
~~~

Open ``http://your-host/bundle-dev/index.html`` in your browser.

Look log: ``htdocs/log.txt``.

---

![Angular Example - screenshot #1](https://github.com/andchir/test-angular-app/blob/master/screenshots/screenshot001.png?raw=true "Angular Example - screenshot #1")

---
