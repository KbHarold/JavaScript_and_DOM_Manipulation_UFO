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
    // Select the input from the date/time element
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Select the input from the city element
    var inputElement2 = d3.select("#city");
    // Get the value property of the input element
    var inputValue2 = inputElement2.property("value");
    // Select the input from the state element 
    var inputElement3 = d3.select("#state");
    // Get the value property of the input element
    var inputValue3 = inputElement3.property("value");
    // Select the input from the country element 
    var inputElement4 = d3.select("#country");
    // Get the value property of the input element
    var inputValue4 = inputElement4.property("value");
    console.log(inputValue4);
    // // Select the input from the shape element
    var inputElement5 = d3.select("#shape");
    // Get the value property of the input element
    var inputValue5 = inputElement5.property("value");
    if (inputValue){
    // Use the form input to filter the data by date
      var filteredTableData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
      console.log(filteredTableData);
      buildTable(filteredTableData);
    }
    else if (inputValue2 != ""){
      var filteredTableData2 = tableData.filter(ufoReport => ufoReport.city === inputValue2);
      console.log(filteredTableData2);
      buildTable(filteredTableData2);
    }
    else if (inputValue3 != ""){
      var filteredTableData3 = tableData.filter(ufoReport => ufoReport.state === inputValue3);
      console.log(filteredTableData3);
      buildTable(filteredTableData3);
    }
    else if (inputValue4 !=""){
      var filteredTableData4 = tableData.filter(ufoReport => ufoReport.country === inputValue4);
      console.log(filteredTableData4);
      buildTable(filteredTableData4);
    }
    else if (inputValue5 != ""){
      var filteredTableData5 = tableData.filter(ufoReport => ufoReport.shape === inputValue5);
      console.log(filteredTableData5);
      buildTable(filteredTableData5);
    }
    else {
      buildTable(tableData);

    };
});