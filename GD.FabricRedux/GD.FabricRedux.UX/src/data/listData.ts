import {Promise} from "es6-promise";
import {
    ContextInfo,
    Web
} from "gd-sprest";

class ListData {
    // Method to get the list items
    static getItems(listName, webUrl) {
        // Return a promise
        return new Promise((resolve, reject) => {
            let requests = [];

            // See if this is the SP environment
            if(ContextInfo.existsFl) {
                // Get the web
                (new Web(webUrl))
                    // Get the list
                    .Lists(listName)
                    // Get the items
                    .Items()
                    // Set the query
                    .query({
                        OrderBy: ["Title"],
                        Select: ["ID", "Title", "EIEMail", "EIAddress", "EICity", "EIState", "EIPostalCode"]
                    })
                    // Execute the request
                    .execute((items) => {
                        // Parse the results
                        for(let item of items.results) {
                            // Add the item
                            requests.push({
                                ID: item["ID"],
                                Title: item["Title"],
                                EIEMail: item["EIEMail"],
                                EIAddress: item["EIAddress"],
                                EICity: item["EICity"],
                                EIState: item["EIState"],
                                EIPostalCode: item["EIPostalCode"],
                            });
                        }

                        // Resolve the promise
                        resolve(requests);
                    });
            } else {
                // Parse the items
                for (let item of Data) {
                    // Add the item
                    requests.push(item);
                }

                // Resolve the promise
                resolve(requests);
            }
        });
    }

    // Method to return test Data
    static getTestData() {
        // Return a promise
        return new Promise((resolve, reject) => {
            let requests = [];
            // Parse the items
            for (let item of Data) {
                // Add the item
                requests.push(item);
            }

            // Resolve the promise
            resolve(requests);
        });
    }
}
    
export default ListData;

// Test Data
const Data = [
        {
            ID: 1,
            Title: "John Doe",
            EIEMail: "john.doe@company1.com",
            EIAddress: "123 Main St.",
            EICity: "Annandale",
            EIState: "VA",
            EIPostalCode: "20001",
        },
        {
            ID: 2,
            Title: "Jane Smith Doe",
            EIEMail: "jane.s.doe@company2.com",
            EIAddress: "345 Main St.",
            EICity: "Baltimore",
            EIState: "MD",
            EIPostalCode: "20002",
        },
        {
            ID: 3,
            Title: "Edgar Allen Poe",
            EIEMail: "edgar.a.poe@company3.com",
            EIAddress: "123 First St.",
            EICity: "Washington",
            EIState: "DC",
            EIPostalCode: "20003",
        }
];