async function bubbleSort(arr) {  
    const text = document.getElementById('text')
    const itmes = document.getElementsByClassName('itme')
    const bforDate = Date.now()
    const len = arr.length;  
    for (var i = 0; i < len - 1; i++) {  
        for (var j = 0; j < len - 1 - i; j++) {  
            if (arr[j] > arr[j + 1]) {        // 如果前面的元素大于后面的元素  
                for(let k = 0; k < len; k++){
                    if (k !== j || k !== j + 1 ) {
                        itmes[k].style.backgroundColor = 'white'
                    }
                }
                [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ]// 元素交换  
                itmes[j + 1].style.backgroundColor = 'red'
                itmes[j].style.backgroundColor = 'red'
                itmes[j + 1].style.height = (arr[j + 1] / len) * itmes[j].parentNode.clientHeight + 'px'
                itmes[j].style.height = (arr[j] / len) * itmes[j].parentNode.clientHeight + 'px'
                await new Promise(resolve => setTimeout(resolve,0))
            }  
        }  
    }
    console.log('bubbleSort' + (Date.now() - bforDate) + 'ms')  
    text.innerText = 'bubbleSort：' + (Date.now() - bforDate) + 'ms'
    // return arr;  
}  
