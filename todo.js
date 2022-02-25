try{
ellm=localStorage.getItem('itemsJson');
items=JSON.parse(ellm);
if (items.length!=null){  
  output(items)
  }
}
catch(e){

}
 
function output(items)
{
  let tabulate=document.getElementById("tbo");
  let str="";
  items.forEach((element,index) => {
    str+=`<tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>${element[2]}</td>
    <td><button class="btn btn-primary" onclick="del(${index})")>Delete</button></td>
    </tr>`
    tabulate.innerHTML=str;
})
}

function update()
{
  console.log("updating list");
  date=new Date;
  title = document.getElementById("title").value;
  desc = document.getElementById('desc').value;
  try{
  if(title.length>0 && desc.length>0)  
  {
      if (localStorage.getItem('itemsJson')==null) 
      {
      items = [];
      items.push([date.toLocaleDateString(),title,desc]);
      localStorage.setItem('itemsJson',JSON.stringify(items))
      }
      else
      {
      ellm=localStorage.getItem('itemsJson');
      items=JSON.parse(ellm);
      items.push([date.toLocaleDateString(),title,desc]);
      localStorage.setItem('itemsJson',JSON.stringify(items));
      }
      document.getElementById("title").value="";
      document.getElementById('desc').value="";
  }
    }
catch(e)
{
  window.alert('Title and description both cannot be empty');
}
  //table content put karna
output(items);
    
}

ele = document.getElementById("addlist");
ele.addEventListener('click',update);

function del(ind)
{
ellm=localStorage.getItem('itemsJson');
items=JSON.parse(ellm);
items.splice(ind,1)
localStorage.setItem('itemsJson',JSON.stringify(items));
output(items);
}


// ele.addEventListener("click",()=>{

//   console.log("in function");
//   title=document.getElementById("title").value;
//   desc=document.getElementById('desc').value;
//   if( title.length==0 && desc.length==0){
//     alert("empty input")

//   }
//   else{
//     serial+=1;
//   localStorage.setItem("title",title);
//   newele=document.createElement('tr');
//   table=document.getElementById("tab");
//   row=table.insertRow(1)
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3= row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   var cell5 = row.insertCell(4);
 

//   cell1.innerHTML = serial;
//   cell2.innerHTML = date.toLocaleDateString();
//   cell3.innerHTML = title;
//   cell4.innerHTML = desc;
//   cell5.innerHTML = `<button class="btn btn-primary" id="del">Delete</button>`
//   }
// })
