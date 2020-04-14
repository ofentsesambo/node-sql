let {
    addNewVisitor,
    listAllVisits,
    emptyVisits,
    veiwVisit,
    updateVisit,
    deleteVisit,
  } = require('../queries.js');

  let visitor = {

    visitorName: "Ofentse",
    Age: 26,
    dateOfVisit: new Date("14/04/2020"),
    timeOfVisit: "12:30",
    assistantName: "Tumelo",
    comments: "very good service"
};

describe("AddNewVisitor function", () => {
    it("Adds a new visiter results to a table", async() => {
        results = await addNewVisitor("Ofentse", 26, "14/04/2020", "12:30", "Tumelo", "very good service");
        expect(results[0].visitorName).toEqual(visitor.visitorName);
        expect(results[0].age).toEqual(visitor.age);
        expect(results[0].dateOfVisit).toEqual(visitor.dateOfVisit);
        expect(results[0].timeOfVisit).toEqual(visitor.timeOfVisit);
        expect(results[0].assistantName).toEqual(visitor.assistantName);
        expect(results[0].comments).toEqual(visitor.comments);
    })
})

describe("emptyVisits function", function() { 
    it("should be able to delete all visitors", async function (done) {

        expect(await emptyVisits()).not.toBeNull();
        done();
    });
});