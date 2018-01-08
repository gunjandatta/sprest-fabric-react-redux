import { Helper, List, Web } from "gd-sprest";

// Create list method
export const createList = (listName, assetsUrl) => {
    // Create the configuration
    let cfg = new Helper.SPConfig({
        ListCfg: [{
            CustomFields: [
                {
                    name: "EIAddress",
                    schemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578311}" Name="EIAddress" StaticName="EIAddress" DisplayName="Address" Type="Text" />'
                },
                {
                    name: "EICity",
                    schemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578312}" Name="EICity" StaticName="EICity" DisplayName="City" Type="Text" />'
                },
                {
                    name: "EIEMail",
                    schemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578313}" Name="EIEMail" StaticName="EIEMail" DisplayName="EMail" Type="Text" />'
                },
                {
                    name: "EIPostalCode",
                    schemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578314}" Name="EIPostalCode" StaticName="EIPostalCode" DisplayName="Postal Code" Type="Text" />'
                },
                {
                    name: "EIState",
                    schemaXml: '<Field ID="{18C5A21D-F68A-49A1-9326-601720578315}" Name="EIState" StaticName="EIState" DisplayName="State" Type="Text" />'
                }
            ],
            ListInformation: {
                BaseTemplate: 100,
                Description: "The description of the custom list.",
                Title: listName
            },
            ViewInformation: [{
                JSLink: assetsUrl + "/bundle.js|" + assetsUrl + "/jslink.js",
                ViewFields: ["ID", "Title", "EIAddress", "EICity", "EIEMail", "EIPostalCode", "EIState"],
                ViewName: "My Project",
                ViewQuery: '<OrderBy><FieldRef Name="Title" /></OrderBy>'
            }]
        }]
    });
}