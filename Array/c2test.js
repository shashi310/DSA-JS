// Write code related to Volatiers Page
// // Write code related to Donators Page

let parent=document.querySelector("tbody");

let data=JSON.parse(localStorage.getItem("Helpers"))  || [];



appendata(data);

function appendata (data){
    parent.innerHTML="";
    
    data.forEach(function(ele,ind){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=ele.name;

        let td2=document.createElement("td");
        td2.textContent=ele.phone;

        let td3=document.createElement("td");
        td3.textContent=ele.email;

        let td4=document.createElement("td");
        td4.textContent=ele.category;

        

        let td5=document.createElement("td");
        td5.textContent="Delete";

        td5.addEventListener("click",function(){
            let ele=data.splice(ind,1);
            localStorage.setItem("Helpers",JSON.stringify(data))

            appendata(data)
        })
        
        tr.append(td1,td2,td3,td4,td5);
        parent.append(tr)
    })
  
}

let select=document.getElementById("filter")

select.addEventListener("change",selectFunction);

function selectFunction(){
    let filtervalue=select.value;

    let data1=data.filter(function(ele,ind){
        if(filtervalue==""){
            return true
        }

        return ele.category==filtervalue;
    })
   
    appendata(data1)
}
