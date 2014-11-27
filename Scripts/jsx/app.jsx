//render the component which we have defined in adv-grid.jsx
//React expects two params: the component and a position in the document
//In this example we defined in Views/Home/_Home.cshtml a DIV with id
//"react-kendo-app"
//
//Also we defined certain 'ScriptBundles' in AppStart/BundleConfig.js to load
//React, KendoUI and our own JavaScrupt/JSX code.
//
//The whole ScriptBundle-Stuff is a .NET-way of structuring, loading and minifying
//of sources, styles etc. It's not manadatory but it's a preferred way in a
//typical ASP.NET application.
//More on ScriptBundles here: http://msdn.microsoft.com/library/system.web.optimization.scriptbundle(v=vs.110).aspx
React.render(
            <App.KendoGrid />,
            document.getElementById('react-kendo-app')
);
