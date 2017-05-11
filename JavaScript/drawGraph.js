var box = document.querySelectorAll('.box')[0]

function addPoint(x,y){
    let div = document.createElement('div')
    div.style.position = 'absolute'

    div.style.top = y + 'px'
    div.style.left = x + 'px'
    div.style.height = '2px'
    div.style.width = '2px'
    div.style.background = 'black'

    document.body.appendChild(div)
}

box.addEventListener('touchstart', function(e){
    console.log('开始摸了')

    let {pageX,pageY} =  e.touches[0] //析构赋值

    addPoint(pageX,pageY)

})

box.addEventListener('touchcancel', function(){
    console.log('取消触摸')
})

box.addEventListener('touchend', function(){
    console.log('摸完了')
})

box.addEventListener('touchenter', function(){
    console.log('摸进去了')
})

box.addEventListener('touchleave', function(){
    console.log('摸出来了')
})

box.addEventListener('touchmove', function(e){
    console.log('边摸边动')
    let {pageX,pageY} =  e.touches[0] //析构赋值

    addPoint(pageX,pageY)
})