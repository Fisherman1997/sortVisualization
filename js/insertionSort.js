async function insertionSort(arr) { 
    const text = document.getElementById('text')
    const itmes = document.getElementsByClassName('itme')
    const bforDate = Date.now() 
    let n = arr.length;  
    for (let i = 1; i < n; i++) {  
        let key = arr[i];  
        let j = i - 1;  
        while (j >= 0 && arr[j] > key) {  
            for(let k = 0; k < n; k++){
                if (k !== j) {
                    itmes[k].style.backgroundColor = 'white'
                }
            }
            arr[j + 1] = arr[j]; 
            itmes[j + 1].style.backgroundColor = 'red'
            itmes[j + 1].style.height = (arr[j + 1] / n) * itmes[j + 1].parentNode.clientHeight + 'px'
            j--;  
            await new Promise(resolve => setTimeout(resolve,0))
        }  
        arr[j + 1] = key; 
        itmes[j + 1].style.height = (arr[j + 1] / n) * itmes[j + 1].parentNode.clientHeight + 'px' 
        await new Promise(resolve => setTimeout(resolve,0))
    }  
    console.log('insertionSort' + (Date.now() - bforDate) + 'ms')  
    text.innerText = 'bubbleSort：' + (Date.now() - bforDate) + 'ms'
    // return arr;  
} 