// 实例化vue对象
new Vue({
    el: '#vue-app', //element
    // data() {
    //     return {
    //         name: 'yangzl',
    //         wechat: "youngzil"
    //     };
    // },
    data: {
        name: 'Shaun',
        wechat: "test",
        job: 'Ninja',
        website: 'https://www.baidu.com/',
        websiteTag: '<a href="https://www.baidu.com/">The Net Baidu Website</a>',
    },
    methods: {
        // greet: function (time) {
        //     return "Good " + time + "," + this.name;
        // }
        greet(time) {
            // return "Good " + time + "，" + this.name;
            return `Good ${time} ${this.name}`;
        },
        sayHello(name) {
            // return "Good " + time + "，" + this.name;
            return `Hello ${name}`;
        }
    }
});

new Vue({
    el: '#vue-event', //element
    data: {
        age: 25,
        x: 0,
        y: 0,
        name: '',
        age: 34
    },
    methods: {
        addAge() {
            this.age++;
        },
        add(inc) {
            this.age += inc;
        },
        subtract(dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click() {
            alert('you clicked me');
        },
        logName: function () {
            console.log('正在输入名字...');
        },
        logAge: function () {
            console.log('正在输入年龄...');
        },

        getName() {
            console.log(this.$refs);
            console.log(this.$refs.name.value);
            this.name = this.$refs.name.value;
        },
        getAge() {
            console.log(this.$refs);
            console.log(this.$refs.age.value);
            this.age = this.$refs.age.value;
        }
    },
    watch: {
        name(val, oldVal) {
            console.log(val, oldVal)
        },
        age(val, oldVal) {
            console.log(val, oldVal)
        }
    }
});

new Vue({
    el: '#vue-computed',
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        // addToA() {
        //     console.log('addToA');
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log('addToB');
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB() {
            console.log('addToB');
            return this.b + this.age;
        }
    }
});


new Vue({
    el: '#vue-css',
    data: {
        mrChangeColor: false,
        mrChangeLength: false,
    },
    methods: {
    },
    computed: {
        computedClasses() {
            return {
                available: this.mrChangeColor,
                nearby: this.mrChangeLength
            };
        }
    }
});

new Vue({
    el: '#vue-condition',
    data: {
        error: false,
        success: false
    },
    methods: {
    },
    computed: {
    }
});

new Vue({
    el: '#vue-loop',
    data: {
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
    },
    methods: {

    },
    computed: {

    }
});

new Vue({
    el: '#vue-demo',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
});

// 全局变量
let data = {
    name: 'Shaun',
    wechat: "test",
    job: 'Ninja',
    website: 'https://www.baidu.com/',
    websiteTag: '<a href="https://www.baidu.com/">The Net Baidu Website</a>',
};

// 创建全局模板,要在容器前面加载
Vue.component('greeting', {
    // html模板
    template: `
    <p>这是全局组件应用，可以在任何实例的容器中使用
    我的名字是：{{name}}
    我的微信是：{{wechat}}
    <button @click='changeName'>改名</button>
    </p>
    `,

    // 属性、方法等
    data() {
        return {
            name: 'Shaun',
            wechat: "test",
            job: 'Ninja',
            website: 'https://www.baidu.com/',
            websiteTag: '<a href="https://www.baidu.com/">The Net Baidu Website</a>',
        };
        // return data;
    },
    methods: {
        changeName() {
            this.name = 'New Name';
        }
    }
});


var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    computed: {
        greet() {
            return 'Hello, from app one :)';
        }
    }
});

const two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    computed: {
        greet() {
            return 'Yo dudes, this is app 2 speaking to ya';
        }
    },
    methods: {
        changeTitle() {
            one.title = 'Title Changed';
        }
    }
});

two.title = 'Changed from outside';


// 组件模板
new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
});
new Vue({
    el: '#vue-app-three'
});
new Vue({
    el: '#vue-app-four'
});

new Vue({
    el: '#vue-fetch',
    data: {
        todos: [],
        todo: {
            title: "",
            completed: false
        }
    },
    mounted() {
        // fetch api请求接口
        const todos = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
            console.log(response);
            // json()只能调用一次，否则报错：Uncaught(in promise) TypeError: Failed to execute 'json' on 'Response': body stream already read
            // console.log(response.json());
            return response.json();
        }).then(todos => {
            console.log(todos);
            this.todos = todos;
        });
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

    },
    methods: {
        onSubmit() {
            console.log(this.todo);
            fetch('https://jsonplaceholder.typicode.com/todos', {
                method: "POST",
                body: JSON.stringify(this.todo),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(response => {
                return response.json();
            }).then(todo => {
                console.log(todo);
                this.todos.unshift(todo);
            });
        }
    }
});

new Vue({
    el: '#vue-axios',
    data: {
        todos: [],
        todo: {
            title: "",
            completed: false
        }
    },
    mounted() {
        // Axios api请求接口
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                console.log(response);
                this.todos = response.data;
            });

    },
    methods: {
        onSubmit() {
            console.log(this.todo);
            axios.post("https://jsonplaceholder.typicode.com/todos", this.todo)
                .then(response => {
                    console.log(response.data);
                    this.todos.unshift(response.data);
                });
        }
    }
});






