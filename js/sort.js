// 初始化数组
let init = ((length) => {
    const arr = []
    for(let i = 1; i <= length; i++){
        arr.push(i)
    }
    return arr.sort((a,b) => Math.random() - 0.5)
})(100)

// 初始化视图，重新渲染数组dom的方法
const setDom = ((list) =>{
    const boxDom = document.querySelector('.box')
    const fn = (list) => {
        boxDom.innerHTML = ''
        list.forEach(itme => {
            const node = document.createElement('div')
            node.classList.add('itme')
            node.style.width = boxDom.clientWidth / list.length + 'px'
            node.style.height = (itme / list.length) * boxDom.clientHeight + 'px'
            // node.index = itme
            boxDom.appendChild(node)
        })
    }
    fn(list)
    return fn
})(init)



const button = document.querySelectorAll('.main .ctrl button')
const text = document.getElementById('text')
const loding = document.getElementById('loding')


// import { quickSort, quickSortSync } from "./quickSort.js"
// import { bubbleSort } from "./bubbleSort.js"
// import { insertionSort } from "./insertionSort.js"

button[0].addEventListener('click', async () => {
    // 随机排序
    loding.classList.remove('display')
    text.innerText = ''
    init.sort((a,b) => Math.random() - 0.5)
    await setDom(init)
    loding.classList.add('display')
})
button[1].addEventListener('click', async () => {
    // 快速排序（递归）
    loding.classList.remove('display')
    text.innerText = ''
    const bforDate = Date.now()
    init = await quickSortSync(init)
    console.log('quickSort' + (Date.now() - bforDate) + 'ms')  
    text.innerText = 'quickSort递归：' + (Date.now() - bforDate) + 'ms'
    await setDom(init)
    loding.classList.add('display')
})
button[2].addEventListener('click', async () => {
    // 快速排序
    loding.classList.remove('display')
    text.innerText = ''
    await quickSort(init)
    loding.classList.add('display')
})
button[3].addEventListener('click', async () => {
    // 冒泡排序
    loding.classList.remove('display')
    text.innerText = ''
    await bubbleSort(init)
    loding.classList.add('display')
    // setDom(init)
})
button[4].addEventListener('click', async () => {
    // 插入排序
    loding.classList.remove('display')
    text.innerText = ''
    await insertionSort(init)
    loding.classList.add('display')
})