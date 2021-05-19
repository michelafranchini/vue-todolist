// Descrizione:
// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).


var app = new Vue (
    {
        el: "#root", 
        data: {
            list: [
                {
                    name: "Fare la spesa", 
                    completed: false
                }, 
                {
                    name: "Lavare la macchina", 
                    completed: false
                }, 
                {
                    name: "Giocare al pc", 
                    completed: false
                }, 
                {
                    name: "Uscire con il cane", 
                    completed: false
                },
                {
                    name: "Sistemare il giardino", 
                    completed: false
                }, 
            ], 

            newItem: {
                name: "", 
                completed: false
            } 
        }, 
        methods: {
            removeItem: function (index) {
                this.list.splice(index, 1); 
            },
            addItem: function() {
                this.list.push(this.newItem);
                this.newItem = {};  
            }, 
            inputAdd: function (event) {
                if (event.keyCode == 13) {
                    this.addItem(); 
                }
            }
        }
    }
)