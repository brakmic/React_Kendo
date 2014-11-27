(function(global){

    var App = global.App = global.App || {};
      //define a simple React component = Kendo Grid
      //get default settings from widget-config.js
       App.KendoGrid = React.createClass({

            getDefaultProps: function(){
                return App.WidgetConfig.KendoGrid.Customers;
            },
            //catch the real DOM element and turn it into a Kendo Grid
            componentDidMount: function(){
                var props = this.props;
                //This object (props) will be served from the above function "getDefaultProps".
                //This function is called by React itself during initialization of the component.
                //
                //Basically we're doing three things:
                //
                //a) get default properties via "getDefaultProps"
                //b) get the newly created DOM node via "getDOMNode"
                //c) initialize Kendo Grind on this node and feed it with default props
                //
                //The "props" object can be anything but in this case we have to adhere to KendoUI
                //rules because the Grid widget expects a certain structure.
                //More info on Grid & its settings here: http://demos.telerik.com/kendo-ui/grid

                $(this.getDOMNode()).kendoGrid(props);
            },
            //everything is just a DIV
            render: function(){
                return (
                        <div id="adv-kendo-grid"></div>
                    );
            }


    });


}(window));
