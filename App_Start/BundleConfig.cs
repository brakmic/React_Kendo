using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace React_Kendo_WebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"));
            //KendoUI Professional (http://www.telerik.com/kendo-ui1)
            bundles.Add(new ScriptBundle("~/bundles/kendo").Include(
                "~/Scripts/kendo/kendo.all.min.js"));

            //React (http://facebook.github.io/react/)
            bundles.Add(new ScriptBundle("~/bundles/react").Include(
                "~/Scripts/JSXTransformer.js",
                "~/Scripts/react-with-addons.js" 
                ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
               "~/Scripts/app/main.js",
               "~/Scripts/app/widget-config.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/bootstrap.css",
                 "~/Content/Site.css"));
            
            bundles.Add(new StyleBundle("~/Content/kendo").Include(
                "~/Content/kendo/kendo.common.min.css",
                "~/Content/kendo/kendo.default.min.css",
                "~/Content/kendo/kendo.dataviz.min.css",
                "~/Content/kendo/kendo.dataviz.default.min.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
