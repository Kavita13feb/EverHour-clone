let imgsobj=[
    { "feature" : "Time tracking" ,
     "img_url" :   "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp" 
      },
{"feature":"Billing and budgeting",
"img_url":"https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
},
{"feature":    "Task management",
"img_url": "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
},
{"feature":"Visual planning",
"img_url":"https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
},
{"feature":"Expenses",
"img_url":"https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
},
{"feature":"Invoicing",
"img_url":"https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
}

]



  
 function showImg(event){


  document.querySelector("#pics").innerHTML=""
  console.log(event)
    console.log("hello")
   let task_pic=document.createElement("img")
   task_pic.src="https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2.webp"
   document.querySelector("#pics").append(task_pic)
 
 }
function showBill(event){
  document.querySelector("#pics").innerHTML=""

  console.log("hello")
 let task_pic=document.createElement("img")
 task_pic.src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp"
 document.querySelector("#pics").append(task_pic)


}
function showTask(){
  document.querySelector("#pics").innerHTML=""
  console.log("hello")
 let task_pic=document.createElement("img")
 task_pic.src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2.webp"
 document.querySelector("#pics").append(task_pic)


}

function showVisual(){
  document.querySelector("#pics").innerHTML=""
  console.log("hello")
 let task_pic=document.createElement("img")
 task_pic.src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp"
 document.querySelector("#pics").append(task_pic)


}
function showExpenses(){
  document.querySelector("#pics").innerHTML=""
  console.log("hello")
 let task_pic=document.createElement("img")
 task_pic.src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp"
 document.querySelector("#pics").append(task_pic)


}
function showInvoicing(){
  document.querySelector("#pics").innerHTML=""
  console.log("hello")
 let task_pic=document.createElement("img")
 task_pic.src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
 document.querySelector("#pics").append(task_pic)


}