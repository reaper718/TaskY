const taskContainer =document.querySelector(".task__container");
const globalStore = [];
console.log(taskContainer);
const generateNewCard = (taskData) =>  `
    <div class="col-sm-12 col-md-6 col-lg-4 id=${taskData.id}">
    <div class="card">
       <div class="card-header d-flex justify-content-end gap-2">
           <button type="button" class="btn btn-success"><i class="fas fa-pencil-alt"></i></button>
           <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
       </div>
       <div class="card-body">
           <img src=${taskData.imageUrl} class="card-img-top" alt="...">
         <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
         <p class="card-text">${taskData.taskDescription}</p>
         <a href="#" class="btn btn-primary">${taskData.taskType}</a>
       </div>
       </div>
       </div>`;

   const loadInitialCardData = () =>{
        //local storage to get card data
        const getCardData = localStorage.getItem("tasky");
        //convert to normal object
        const {cards} =JSON.parse(getCardData);
        //loop over array of task object to create html inject it to dom
        cards.map((cardObject) => {
            taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

            //update our global store
            globalStore.push(cardObject);
        }
        
        )
        

    };

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    }
       taskContainer.insertAdjacentHTML("beforeend" ,generateNewCard(taskData));

       globalStore.push(taskData);
       localStorage.setItem("tasky",JSON.stringify({cards: globalStore}));
};

