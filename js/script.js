// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


var app = new Vue(
    {
        el: '#root',
        data: {
            newTodoText:'',
            todos: [
                {
                    text: 'Dare da mangiare a Sirio',
                    done: true
                },
                {
                    text: 'Portare fuori Sirio',
                    done: false
                },
                {
                    text: 'Seguire lezione Boolean',
                    done: true
                },
                {
                    text: 'Preparate pranzo',
                    done: false
                },
                {
                    text: 'Fare esercitazione Boolean',
                    done: true,
                },
            ]
        },
        methods: {
            removeToDo(index) {
                this.todos.splice(index, 1);
            },
            addNewTodoText() {
                const trimmedString = this.newTodoText.trim();
                if(trimmedString.length > 0) {
                    const newTodo = {
                        text: trimmedString,
                        done: false
                    }
                    this.todos.push(newTodo);

                    this.newTodoText = '';
                }
            },
        }
    }
);