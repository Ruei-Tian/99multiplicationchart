const section = document.querySelector('.section');
window.onload = function() {
    const title =  ` 
        <ul class="card">
            <li class="titlebox">
              <div class="innerbox">
                <h1>九九乘法表</h1>
                <p>MULTIPLICATION CHART</p>
              </div>
            </li>  `  
                       
    let str = '';      
    for (let i = 2; i < 10 ; i++) {
        const count = `<li class="number_card">
            <div class="count">${i}</div>`;
        str += count;
        for (let j = 1; j < 10 ; j++) {
            const formula = `<p class="formula">${i} X ${j} = ${i*j}</p>`;
                
            str += formula;   
            console.log(str);           
        }          
    }
    const content = `</li> </ul>`;
    section.innerHTML = title + str + content;
    }
    
