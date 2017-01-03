class List {
    // Method to get the list items
    static getItems() {
        /**
         * TO DO - Update to query a list using the REST api
         */

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

export default List;

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