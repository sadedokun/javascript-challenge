// from data.js
// var tableData = data;

// YOUR CODE HERE!
const tableData = data;
const tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");

  data.map((row) => {
    const tr = tbody.append("tr");
    Object.values(row).map((value) => {
      let cell = tr.append("td");
      cell.text(value);
    });
  });
}

function handleclick() {
  const date = d3.select("#datetime").property("value");
  let filterData = [];

  if (data) {
    filterData = data.filter((row) => row.datetime == date);
  }

  buildTable(filterData);
}

d3.select("#reset").on("click", function () {
  buildTable(data);
});
d3.select("#filter-btn").on("click", handleclick);
buildTable(data);
