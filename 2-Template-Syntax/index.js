var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        rawHtml: '<span style="color: red">This should be red.</span>'
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        msg: 'Hello Vue!',
        dynamicId:'testId',
        isButtonDisabled:'false'
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        seens: true
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        attributename: 'href',
        url:'https://www.google.com'
    }
})