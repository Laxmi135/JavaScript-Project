document.querySelector("form").addEventListener("submit",todoApp);
let taskArr = JSON.parse(localStorage.getItem("todoList")) || []; 
window.addEventListener("load",function(){
    displayTable(taskArr)

});
function todoApp(event){
    event.preventDefault();
   let taskName = document.querySelector("#task").value;
   let priority = document.querySelector("#priority").value;
   let taskobj = {

    task: taskName,
    prior: priority,

   };
   taskArr.push(taskobj);
   displayTable(taskArr);
    localStorage.setItem("todoList", JSON.stringify(taskArr));
}


function displayTable(taskArr){
    document.querySelector("tbody").innerHTML = " ";
    taskArr.forEach(function (elem,index){

       let row = document.createElement("tr");
       let col1 = document.createElement("td");
       col1.innerText = elem.task;  
        let col2 = document.createElement("td");
        col2.innerText = elem.prior;
        if(elem.prior == "high"){
            col2.style.backgroundColor = "orange";
        }
        else{
            col2.style.backgroundColor = "green";
        }
        let col3 = document.createElement("td");
        col3.innerText = "Delete";
         col3.addEventListener("click", function () {
          deleteRow(elem, index);
    });
     col3.style.color = "red";
    row.append(col1, col2, col3);
     document.querySelector("tbody").append(row);  
    });
}
function deleteRow(elem, index) {
  
  taskArr.splice(index, 1);
  console.log(taskArr);
  localStorage.setItem("todoList", JSON.stringify(taskArr));
  displayTable(taskArr);
}

       