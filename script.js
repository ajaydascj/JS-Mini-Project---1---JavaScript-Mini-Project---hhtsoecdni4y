const main = document.getElementById("main")
const blocks = [];


for(let i =0;i<9;i++){
 const block = document.createElement('div')
 block.classList.add('inner')
 block.setAttribute('id',i)
 block.addEventListener('click', () => blockLogic(block))
 blocks.push(block);
 main.appendChild(block)
}    

let nextPlayer = 'X'
const blockLogic = (block) => {
    block.innerHTML = nextPlayer
    block.style.cursor ='not-allowed'
    block.innerHTML = nextPlayer
    nextPlayer = nextPlayer === 'X' ? 'O' :'X'

 
    if (checkWin(block)) {
        alert('Win')
    }

}
const checkWin = (block) => {
    const selectedVal = block.getAttribute('id')
   // console.log(selectedVal);

   //0 is selected
   if(selectedVal === '0') {
       if(
           block.innerHTML === blocks[1].innerHTML &&
           block.innerHTML === blocks[2].innerHTML
       )if(block.innerHTML === 'X'){
           alert('PLAYER X WON')
           location.reload();
       }else{
           alert('PLAYER O WON')
           location.reload();
       }
       
   }
   if(selectedVal === '0') {
    if(
        block.innerHTML === blocks[3].innerHTML &&
        block.innerHTML === blocks[6].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '0') {
    if(
        block.innerHTML === blocks[4].innerHTML &&
        block.innerHTML === blocks[8].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}

//1 is selected
if(selectedVal === '1') {
    if(
        block.innerHTML === blocks[2].innerHTML &&
        block.innerHTML === blocks[0].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '1') {
    if(
        block.innerHTML === blocks[4].innerHTML &&
        block.innerHTML === blocks[7].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}

//2 is selected
if(selectedVal === '2') {
    if(
        block.innerHTML === blocks[1].innerHTML &&
        block.innerHTML === blocks[0].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
}
    if(selectedVal === '2') {
        if(
            block.innerHTML === blocks[5].innerHTML &&
            block.innerHTML === blocks[8].innerHTML
        )if(block.innerHTML === 'X'){
            alert('PLAYER X WON')
            location.reload();
        }else{
            alert('PLAYER O WON')
            location.reload();
        }
        
    }

    if(selectedVal === '2') {
        if(
            block.innerHTML === blocks[4].innerHTML &&
            block.innerHTML === blocks[6].innerHTML
        )if(block.innerHTML === 'X'){
            alert('PLAYER X WON')
            location.reload();
        }else{
            alert('PLAYER O WON')
            location.reload();
        }
        
    }
    
// 3 is selected 
if(selectedVal === '3') {
    if(
        block.innerHTML === blocks[4].innerHTML &&
        block.innerHTML === blocks[5].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '3') {
    if(
        block.innerHTML === blocks[0].innerHTML &&
        block.innerHTML === blocks[6].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
//4 is selected
if(selectedVal === '4') {
    if(
        block.innerHTML === blocks[3].innerHTML &&
        block.innerHTML === blocks[5].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '4') {
    if(
        block.innerHTML === blocks[1].innerHTML &&
        block.innerHTML === blocks[7].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '4') {
    if(
        block.innerHTML === blocks[2].innerHTML &&
        block.innerHTML === blocks[6].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '4') {
    if(
        block.innerHTML === blocks[0].innerHTML &&
        block.innerHTML === blocks[8].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
//5 is selected
if(selectedVal === '5') {
    if(
        block.innerHTML === blocks[2].innerHTML &&
        block.innerHTML === blocks[8].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '5') {
    if(
        block.innerHTML === blocks[3].innerHTML &&
        block.innerHTML === blocks[4].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
//6 is selected
if(selectedVal === '6') {
    if(
        block.innerHTML === blocks[7].innerHTML &&
        block.innerHTML === blocks[8].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '6') {
    if(
        block.innerHTML === blocks[3].innerHTML &&
        block.innerHTML === blocks[0].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '6') {
    if(
        block.innerHTML === blocks[4].innerHTML &&
        block.innerHTML === blocks[2].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
//7 is selected
if(selectedVal === '7') {
    if(
        block.innerHTML === blocks[6].innerHTML &&
        block.innerHTML === blocks[8].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '7') {
    if(
        block.innerHTML === blocks[4].innerHTML &&
        block.innerHTML === blocks[1].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
//8 is selected
if(selectedVal === '8') {
    if(
        block.innerHTML === blocks[5].innerHTML &&
        block.innerHTML === blocks[2].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '8') {
    if(
        block.innerHTML === blocks[0].innerHTML &&
        block.innerHTML === blocks[4].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}
if(selectedVal === '8') {
    if(
        block.innerHTML === blocks[6].innerHTML &&
        block.innerHTML === blocks[7].innerHTML
    )if(block.innerHTML === 'X'){
        alert('PLAYER X WON')
        location.reload();
    }else{
        alert('PLAYER O WON')
        location.reload();
    }
    
}




}
