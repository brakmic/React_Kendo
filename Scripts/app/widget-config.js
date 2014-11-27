(function (global) {

    var App = global.App = global.App || {};

    App.WidgetConfig = {};

    App.WidgetConfig.KendoGrid = {}

    App.WidgetConfig.KendoGrid.Customers = {
        dataSource: {
            type: 'json',
            transport: {
                read: {
                    url: 'http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json',
                    dataType: 'json'
                }
            },
            pageSize: 5,
            serverPaging: true,
            serverSorting: true,
            schema: {
                model: { //this will be the model for the grid
                    id: 'id',
                    fields: {
                        id: { editable: false, nullable: false },
                        name: { editable: false, nullable: true, type: 'string' },
                        company: { editable: false, nullable: true, type: 'string' },
                        address: { editable: false, nullable: true, type: 'string' },
                        city: { editable: true, nullable: true, type: 'string' },
                        postalCode: { editable: true, nullable: true, type: 'string' },
                        country: { editable: false, nullable: true, type: 'string' },
                        phone: { editable: true, nullable: true, type: 'string' },
                    }
                },
                parse: function (response) { //here we process the received data and adjust it to our internal format
                    var customers = [];
                    for (var i = 0; i < response.value.length; i++) {
                        var data = response.value[i] ? response.value[i] : null,
                        customer = {
                            id: data.CustomerID,
                            name: data.CompanyName,
                            address: data.Address,
                            city: data.City,
                            postalCode: data.PostalCode,
                            country: data.Country,
                            phone: data.Phone
                        };
                        console.log(JSON.stringify(customer));
                        customers.push(customer);
                    };

                    return customers;
                }
            }
        },
        sortable: true,
        pageable: true,
        groupable: true,
        sizable: true,
        selectable: true,
        scrollable: true,
        filterable: true,
        //change: onChange,
        //a template for order details
        //this will get called after we open the detail page (and only once per customer)
        //detailTemplate: kendo.template($(".mithril-template").html()),
        //detailInit: detailInit, //here we do extra processing of the template for each customer
        editable: {
            confirmation: function (e) {
                return 'Do you really want to delete the customer?';
            },
            cancelDelete: 'No',
            confirmDelete: 'Yes',
            mode: 'inline'
        },
        columns: [
                {
                    field: 'id',
                    title: 'ID'
                },
                {
                    field: 'name',
                    title: 'Customer'
                },
                {
                    field: 'company',
                    title: 'Company'
                },
                {
                    field: 'address',
                    title: 'Address'
                },
                {
                    field: 'city',
                    title: 'City'
                },
                {
                    field: 'postalCode',
                    title: 'Postal Code'
                },
                {
                    field: 'country',
                    title: 'Country'
                },
                {
                    field: 'phone',
                    title: 'Phone'
                },
                {
                    command: [
                        { name: 'edit', text: { edit: 'Edit', cancel: 'Cancel', update: 'OK' } },
                        { name: 'destroy', text: 'Delete' },
                    ],
                    title: '&nbsp;',
                    width: '220px'
                }
        ]
    };

}(window));