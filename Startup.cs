﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(React_Kendo_WebApp.Startup))]

namespace React_Kendo_WebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
 
        }
    }
}
