const quickSortSync = async (arr) => {
    if (arr.length <= 1) {  
        return arr;  
    }
    const left = [] ,right = []
    const pivotIndex = Math.floor(arr.length / 2);  
    const pivot = arr[pivotIndex]; 
    for(let i = 0; i < arr.length; i++) {
        if (pivotIndex === i) continue
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...await quickSortSync(left), pivot, ...await quickSortSync(right)]
}

async function quickSort(arr) { 
    const text = document.getElementById('text')
    const itmes = document.getElementsByClassName('itme')
    const bforDate = Date.now()
    if (arr.length <= 1) {  
        return arr;  
    }  
    const stack = [];  
    stack.push({ left: 0, right: arr.length - 1 }); 
    while (stack.length > 0) {  
        let { left, right } = stack.pop();  
        const pivot = arr[Math.floor((left + right) / 2)]; 
        let l = left,  
            r = right;  

        while (l <= r) {  
            while (arr[l] < pivot) {  
                l++;  
            }  
            while (arr[r] > pivot) {  
                r--;  
            }  
            if (l <= r) {  
                // 交换左右两边的元素 
                for(let k = 0; k < arr.length; k++){
                    if (k !== r || k !== l) {
                        itmes[k].style.backgroundColor = 'white'
                    }
                }
                [ arr[l], arr[r] ] = [ arr[r], arr[l] ]// 元素交换  
                itmes[l].style.backgroundColor = 'red'
                itmes[r].style.backgroundColor = 'red'
                itmes[l].style.height = (arr[l] / arr.length) * itmes[l].parentNode.clientHeight + 'px'
                itmes[r].style.height = (arr[r] / arr.length) * itmes[l].parentNode.clientHeight + 'px'
                l++; 
                r--; 
                await new Promise(resolve => setTimeout(resolve,0))
            }  
        }  

        if (right > l) {  
            stack.push({ left: l, right }); // 将右边的子数组入栈  
        }  
        if (left < l -1 ) {  
            stack.push({ left, right: l - 1 }); // 将左边的子数组入栈  
        }
    }
    console.log('quickSort' + (Date.now() - bforDate) + 'ms')  
    text.innerText = 'quickSort：' + (Date.now() - bforDate) + 'ms'
}


