var num = prompt("Enter a number:");
if (num != null && num != "") {
  num = parseInt(num);
} else {
  num = 5;
}
var table = "<h2>Multiplication table of " + num + "</h2>";
table += "<table>";
for (var i = 1; i <= 10; i++) {
  table += "<tr>";
  table += "<td>" + num + " x " + i + "</td>";
  table += "<td>=</td>";
  table += "<td>" + (num * i) + "</td>";
  table += "</tr>";
}
table += "</table>";
document.write(table);
