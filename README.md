**React & KendoUI**

This is a demo webapp that combines ReactJS, Kendo UI, & ASP.NET.

* ReactJS:  <a href="http://facebook.github.io/react/">ReactJS</a>
* Kendo UI: <a href="http://www.telerik.com/kendo-ui1" target="_blank">Telerik Homepage</a>
* Northwind Service: <a href="http://services.odata.org/Northwind/Northwind.svc/?$format=json" target="_blank">Service JSON</a>

Please note that Kendo Grid belongs to the "Professional" version of Kendo UI and therefore needs a proper license to be used.
Therefore *I'm not providing the copyrighted scripts/styles to avoid violation of Telerik's license terms*.

But there's a 30 day trial available: <a href="http://www.telerik.com/download/kendo-ui" target="_blank">Kendo UI Trial License</a>

The Kendo-Scripts should go into *Scripts/kendo* directory and CSS-files into *Content/kendo*.
Or adjust the Bundles in *App_Start/BundleConfig.js*

<img src="http://l77.imgup.net/reacteb92.png" />

This app is very simple. Actually, I shouldn't even call it an "app". ;) 

It's just a very basic ReactJS component based on the KendoUI Grid widget. There is no real logic in there, for example handling of Widget-events via
the <a href="http://facebook.github.io/react/docs/events.html" target="_blank">synthetic ReactJS events</a>, no checks via <a href="http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate" target="_blank">shouldComponentUpdate</a>, no handling of <a href="http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops">componentWillReceiveProps</a> etc.

It's just the beginning and I'll try to update this "app" soon.

For better examples regarding KendoUI in combination with ReactJS I recommend to check out the excellent <a href="https://github.com/wingspan/wingspan-forms" target="_blank">Wingspan Forms</a> library.

**License**

MIT
