import {List, Web} from "gd-sprest";

/**
 * List Helper Class
 **/
export class ListHelper {
    // Method to create the fields
    createFields(list) {
        // Get the list
        list = typeof(list) === "string" ? new $REST.List(list).execute() : list;

        // Get the fields
        list.Fields().execute((fields) => {
            // Define the custom fields
            var customFields = [
                {
                    Name: "EIAddress",
                    SchemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578311}" Name="EIAddress" StaticName="EIAddress" DisplayName="Address" Type="Text" />'
                },
                {
                    Name: "EICity",
                    SchemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578312}" Name="EICity" StaticName="EICity" DisplayName="City" Type="Text" />'
                },
                {
                    Name: "EIEMail",
                    SchemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578313}" Name="EIEMail" StaticName="EIEMail" DisplayName="EMail" Type="Text" />'
                },
                {
                    Name: "EIPostalCode",
                    SchemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578314}" Name="EIPostalCode" StaticName="EIPostalCode" DisplayName="Postal Code" Type="Text" />'
                },
                {
                    Name: "EIState",
                    SchemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578315}" Name="EIState" StaticName="EIState" DisplayName="State" Type="Text" />'
                }
            ];

            // Parse the custom fields
            for(var i=0; i<fields.results.length; i++) {
                var counter = 0;
                var field = fields.results[i];

                // Parse the custom fields
                for(var j=0; j<customFields.length; j++) {
                    var customField = customFields[j];

                    // See if this the field we are looking for
                    if(customField.Name == field.InternalName) {
                        // Update the counter
                        counter++;

                        // Set the field
                        customFields[j].field = field;

                        // Break from the loop
                        break;
                    }
                }

                // See if we found all the fields
                if(counter == customFields.length) {
                    // Log
                    console.log("Custom fields already exist.");
                    return;
                }
            }

            // Parse the custom fields
            for(var i=0; i<customFields.length; i++) {
                // See if the field exists
                if(customFields[i].field) { continue; }

                // Create the field
                list.Fields().createFieldAsXml(customFields[i].SchemaXml)
                    // Execute the request but wait for the previous request to complete
                    .execute(true);
            }

            // Wait for the requests to complete
            list.done(() => {
                // Log
                console.log("Fields created...");
            });
        }, true);
    }

    // Method to create the list
    createList(listName, assetsUrl) {
        // Get the list
        (new List(listName))
            // Execute the request
            .execute((list) => {
                // See if it exists
                if(list.existsFl) {
                    // Create the fields
                    this.createFields(list);

                    // Create the view
                    this.createView(list, assetsUrl);
                    return;
                }

                // Set the list name
                let listNameNoSpaces = listName.replace(/\s/g, "");

                // Get the current web
                (new Web())
                    // Get the lists
                    .Lists()
                    // Add a list
                    .add({
                        BaseTemplate: 100,
                        Description: "The description of the custom list.",
                        Title: listNameNoSpaces
                    })
                    // Execute the request
                    .execute((list) => {
                        // Update the title
                        list.update({
                            Title: listName
                        })
                        // Execute the request
                        .execute(() => {
                            // Create the fields
                            this.createFields(list);

                            // Create the view
                            this.createView(list, assetsUrl);
                        });

                        // Wait for the requests to complete
                        list.done(() => {
                            // Log
                            console.log("List created successfully.");
                        });
                    });
            });
    }

    // Method to create the view
    createView(list, assetsUrl) {
        // Trim the assets url
        assetsUrl = assetsUrl[assetsUrl.length-1] == "/" ? assetsUrl.substr(0, assetsUrl.length-1) : assetsUrl;

        // Get the list
        list = typeof(list) === "string" ? new $REST.List(list).execute() : list;

        // Get the view
        list.Views().execute((views) => {
            var existsFl = false;

            // Parse the views
            for(var i=0; i<views.results.length; i++) {
                var view = views.results[i];

                // See if the view exists
                if(view.Name == "My Project") {
                    // Set the flag
                    existsFl = true;
                    return;
                }
            }

            // Create the 'My Project' view
            list.Views().add({
                JSLink: assetsUrl + "/bundle.js|" + assetsUrl + "/jslink.js",
                Title: "My Project",
                ViewQuery: '<OrderBy><FieldRef Name="Title" /></OrderBy>'
            }).execute((view) => {
                // Add the view fields
                $REST.Helper.List.addViewFields(view, ["ID", "Title", "EIAddress", "EICity", "EIEMail", "EIPostalCode", "EIState"])
                // Wait for it to complete
                .done(() => {
                    // Log
                    console.log(view.existsFl ? "View was created successfully." : "Error creating the view");
                });
            });
        }, true);
    }
}