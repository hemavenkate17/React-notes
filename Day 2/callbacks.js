//return statement can return value only once

//once returned the control cannot stay at the function postion

function multiphasefunction(phase1,phase2,finishoutput,callback){
    console.log("Phase 1 is executing",phase1)
    callback("Phase 1 output")
    console.log("Phase 2 is executing",phase2)
    callback("Phase 2 output")
    console.log("Final phase is executing",finishoutput)

}

function caller(){
    multiphasefunction('task1','task2','wrapping task', function(output){
        console.log("caller processing output",output)
    })
}

caller()