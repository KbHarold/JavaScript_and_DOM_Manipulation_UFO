// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");
// YOUR CODE HERE!

function buildTable(tdata){
tbody.html('');
tdata.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.values(ufoReport).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
buildTable(tableData);
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    if (inputValue){
    // Use the form input to filter the data by blood type
    var filteredTableData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
    console.log(filteredTableData);
    buildTable(filteredTableData);

    }
    else {
      buildTable(tableData);

    };
});