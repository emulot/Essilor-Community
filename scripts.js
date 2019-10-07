var vm = new Vue({
    el: '#app',
    data: {
        state:1,
        onProfile: false,
        showReminder: false,
        reminded: false,
        showLoader: false,
        uploaded: false,
        glassesName: '',
        showGlassesResults: false,
        glassesSelected: false,
        showLens: false,
        showDropDown: false,
        lensSelected: false,
        showConfirm: false,
        showBigModal: false,
        currentCard: 1,
        showCompletedApp: false
    },
    methods: {
        reset(){
            this.onProfile = false;
            this.showReminder = false;
            this.reminded = false;
            this.showLoader = false;
            this.uploaded = false;
            this.glassesName =  '';
            this.showGlassesResults = false;
            this.glassesSelected = false;
            this.showLens = false;
            this.showDropDown = false;
            this.lensSelected = false;
            this.showConfirm = false;
            this.showBigModal = false;
            this.currentCard = 1;
            this.showCompletedApp = false;
            this.state = 1;
        },
        toggleReminder(){
            this.showReminder = !this.showReminder;
            this.reminded = true;
        },
        gotoProfile(){
            this.onProfile = !this.onProfile;
        },
        handlePhotoChange(){
            this.showLoader = true;
            setTimeout(()=>{
                this.showLoader = false;
                this.uploaded = true;
            },2000)
        },
        triggerUpload(){
            this.$refs.field.click();
        },
        handleKeyup(event){
            if(this.glassesName.length > 2){
                this.showGlassesResults = true;
            }
            console.log(event.which);
            if(event.which == 13){
                this.showGlassesResults = false;
                this.glassesSelected = true;
                event.target.blur();
            }
        },
        gotoLens(){
            this.showLens = true;
        },
        openDropdown(){
            this.showDropDown = true;
        },
        selectLens(){
            this.lensSelected = true;
            this.showDropDown = false;
        },
        gotoConfirm(){
            this.showConfirm = true;
        },
        nextConfirm(){
            this.state++;
            if(this.state==2){
                setTimeout(()=>{
                    this.state++;
                },3000)
            }
        },
        toggleBigModal(){
            this.showBigModal = !this.showBigModal;
            setTimeout(()=>{
                document.getElementById('bigmodal').scrollTo(0,0);
            })
            
        },
        nextCard(){
            if(this.currentCard == 4){
                this.currentCard = 1;
            }else{
                this.currentCard++;
            }
        },
        gotoCompletedApp(){
            this.showCompletedApp = !this.showCompletedApp;
        }
    }
});
