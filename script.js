let command;
command= prompt("Enter a Command").toLowerCase();
let List=[];
let count=0;
while(command !== "quit")
{
    if(command=="new"){
        let task= prompt("Enter a task to add");
        List[count]=task;
        console.log(`${count++}: Task ${task} added to the List`);
    }

    if(command=="list"){
        if(List.length==0){
            console.log("Nothing in the list");
        }
        else{
        console.log("***********************************************");
        let cont=0;
        for(let tsk of List){
            console.log(`${cont++}: ${tsk}`);
        }
        console.log("***********************************************");
        }
    }

    if(command=="delete"){
        count--;
        if(List.length==0){
            console.log("Nothing in the list to delete");
        }else{
        let dlt= parseInt(prompt("Enter the index to delete"));
        List.splice(dlt,1);
        console.log("***********************************************");
        let cont=0;
        for(let tsk of List){
            console.log(`${cont++}: ${tsk}`);
        }
        console.log("***********************************************");
        }
    }
    command= prompt("Enter a Command").toLowerCase();
}
console.log("Quitting");