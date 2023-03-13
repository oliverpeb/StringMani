Vue.createApp({

    data() {
        return {
            newWord: '',
            userInput: "",
            
      
        }

    },

    methods: {
      
          capitalizeFirstLetter(words) {
            return words.charAt(0).toUpperCase() + words.slice(1);
          },
          capitalizeLastLetter(word) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
          },
          
            reverse(word) {
            return word.split('').reverse().join('');
                
            },

            showResult(){
              if (this.newWord === ''){
                alert('Please enter a word first')
              }
            }
    },
    }).mount("#app")


   