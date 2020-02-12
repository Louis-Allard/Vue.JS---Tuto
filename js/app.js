new Vue ({
    el: '#app',
    data: {
        message: 'Salut les gens',
        link: 'https://louis-allard.github.io/Portfolio/',
        success: true,
        personns : ['Louis','Aude','Maximilien','Aurélien'],
    },
    methods: {
        close: function() {
            this.success = false,
            this.message = 'Fermé'
        }
    }
})