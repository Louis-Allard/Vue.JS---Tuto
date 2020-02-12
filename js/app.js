let vm = new Vue ({
    el: '#app',
    data: {
        message: 'Salut les gens',
        link: 'https://louis-allard.github.io/Portfolio/',
        success: true,
        personns : ['Louis','Aude','Maximilien','Aurélien'],
        seconds: 0
    },
    mounted: function() {
        setInterval(() => {
            this.seconds++;
        },1000)
    },
    methods: {
        close: function() {
            this.success = false,
            this.message = 'Warning'
        },
        addPersonn: function() {
            this.personns.push("Samuel");
        }
    }
})