const { createApp } = Vue;

createApp({
    data() {
        return {
            slides:[
                {
                    immagine: 'https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-787.jpg',
                    nome: 'Smartphone XYZ',
                    descrizione: 'Uno smartphone potente con caratteristiche avanzate e display nitido.',
                    prezzo: 499.99
                },
                {
                    immagine: 'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg',
                    nome: 'Laptop ABC',
                    descrizione: 'Un laptop leggero e performante, ideale per la produttività in movimento.',
                    prezzo: 899.99
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg',
                    nome: 'Fotocamera 123',
                    descrizione: 'Una fotocamera professionale con alta risoluzione e molte funzionalità.',
                    prezzo: 699.99
                }
            ],
            startSlide: 0
            
        }
    },
    methods: {
        prev(){
            if(this.startSlide > 0){
                this.startSlide--;
            }else{
                this.startSlide = this.slides.length-1;
            }
        },
        next(){
            if(this.startSlide < this.slides.length-1){
                this.startSlide++;
            }else{
                this.startSlide = 0;
            }
        }
    },
}).mount('#app');