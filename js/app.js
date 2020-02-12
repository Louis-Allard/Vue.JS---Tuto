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
        this.$interval = setInterval(() => {
            console.log('Time');
            this.seconds++;
        },1000)
    },
    destroyed: function() {
        clearInterval(this.$interval);
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