var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },

    //computed only updates when dependent variable changes
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    }
})

var vm2 = new Vue({
    el: '#demo2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'sdf',
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var vm3 = new Vue({
    el: '#demo3',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})