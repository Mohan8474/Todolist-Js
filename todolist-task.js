showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskdate = document.getElementById("date")
let addtaskbtn = document.getElementById("addtaskbtn");
let showalltaskbtn = document.getElementById("all_tasks");
let showptaskbtn = document.getElementById("pending_tasks");


addtaskbtn.addEventListener("click", function () {
    addtaskinputval = addtaskinput.value;
    addtaskdateval = addtaskdate.value;
    if (addtaskinputval.trim() != 0) {
        if (addtaskdateval.trim()!=0){

            let webtask = localStorage.getItem("localtask");
            if (webtask == null) {
                taskObj = [];
            }
            else {
                taskObj = JSON.parse(webtask);
                console.log(taskObj);
            }
            taskObj.push({ 'task_name': addtaskinputval, 'task_date': addtaskdateval });
    
            localStorage.setItem("localtask", JSON.stringify(taskObj));
            addtaskinput.value = '';
            addtaskdate.value = '';
        }
       
    }
    showtask();
})

// showtask
function showtask() {
    
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        if(item.completeStatus===true){
            taskCompleteValue = `<td class="checked">${item.task_name} ${item.task_date}</td>`;
        }else{
            taskCompleteValue = `<td class="font">${item.task_name} &nbsp;&nbsp; ${item.task_date}</td>`;
        }
        if(item.editable===true){

            html += `<tr id='rowval'>
                    <div>
                    ${taskCompleteValue}
                    <td type="button" id='del_btn' onclick="deleteitem(${index})">Delete</td>
                    </div>

                    
                </tr>`;
    
        }
else{

        html += `<tr id='rowval'>
                    <div>
                    ${taskCompleteValue}
                    <td type="button" id='edit_btn' onclick="edittask(${index})">Edit</td>
                    <td type="button" id='del_btn' onclick="deleteitem(${index})">Delete</td>
                    <td type="button" id='mark_btn'  onclick="markcomp(${index})">Completed</td>
                    </div>

                    
                </tr>`;
}
    });
        addedtasklist.innerHTML = html;
}

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        if(item.completeStatus===true){
            taskCompleteValue = `<td class="checked">${item.task_name} ${item.task_date}</td>`;
        }else{
            taskCompleteValue = `<td class="font">${item.task_name} &nbsp;&nbsp; ${item.task_date}</td>`;
        }
        if(item.editable===true){

            html += `<tr id='rowval'>
                    <div>
                    ${taskCompleteValue}
                    <td type="button" id='del_btn' onclick="deleteitem(${index})">Delete</td>
                    </div>

                    
                </tr>`;
    
        }
else{

        html += `<tr id='rowval'>
                    <div>
                    ${taskCompleteValue}
                    <td type="button" id='edit_btn' onclick="edittask(${index})">Edit</td>
                    <td type="button" id='del_btn' onclick="deleteitem(${index})">Delete</td>
                    <td type="button" id='mark_btn'  onclick="markcomp(${index})">Completed</td>
                    </div>

                    
                </tr>`;
}
    });
        addedtasklist.innerHTML = html;
}

// edittask
function edittask(index) {
     
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
  


   
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    

    addtaskinput.value = taskObj[index]['task_name'];
    addtaskdate.value = taskObj[index]['task_date'];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";
}

// savetask
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function () {
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;

    for (keys in taskObj[saveindex]) {
        if (keys == 'task_name') {
            taskObj[saveindex].task_name = addtaskinput.value;
			taskObj[saveindex].task_date = addtaskdate.value;
            console.log(taskObj);

        }
    }

    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = '';
	addtaskdate.value = '';
    showtask();
})
// deleteitem
function deleteitem(index) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    console.log(taskObj);

    showtask();
}

function markcomp(index) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj[index].completeStatus=true;
    taskObj[index].editable=true;   
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}



function pending(){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let showptaskbtn = document.getElementById("pending_tasks");
    showptaskbtn.addEventListener("click", function () {
        taskObj.forEach((item, index)=>{
            if(item.editable===true){
                console.log(taskObj);
            }
        })

    })
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
    

}