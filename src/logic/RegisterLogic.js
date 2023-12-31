import store from "@/store/index";
export default {
    computed: {
        newRegisterData(){
            return store.state.newRegisterData;
        }
    },
    methods: {
        postNewRegisterInfo() {
        console.log('WORKING BUTTON')
        const checkFirstname = document.getElementById("firstname");
        const checkLastname = document.getElementById("lastname");
        const checkDOB = document.getElementById("dateofbirth");
        const CheckStreetname = document.getElementById("streetname");
        const checkCity = document.getElementById("city");
        const checkCountry = document.getElementById("country");
        const checkState = document.getElementById("state");
        const checkPostcode = document.getElementById("postcode");
            if (checkFirstname.value && checkFirstname.value.length > 0 && checkLastname.value && checkLastname.value.length > 0 && checkDOB.value && checkDOB.value.length > 0 && CheckStreetname.value && CheckStreetname.value.length > 0 && checkCity.value && checkCity.value.length > 0 && checkCountry.value && checkCountry.value.length > 0 && checkState.value && checkState.value.length > 0 && checkPostcode.value && checkPostcode.value.length > 0) {
                store.dispatch('postRegisterData');
                this.$router.push('/');
            } 
            else if (checkFirstname.value || checkFirstname.value.length <= 0 || checkLastname.value || checkLastname.value.length <= 0 || checkDOB.value || checkDOB.value.length <= 0 || CheckStreetname.value || CheckStreetname.value.length <= 0 || checkCity.value || checkCity.value.length <= 0 || checkCountry.value || checkCountry.value.length <= 0 || checkState.value || checkState.value.length <=0 || checkPostcode.value || checkPostcode.value.length <= 0) {
                console.log('ERROR SAVING')
                if(!document.querySelector(".errorMessage")) {
                    let error = document.createElement("p");
                    error.innerText = "Please enter all fields";
                    error.className="errorMessage";
                    error.style.color = "red";
                    document.querySelector(".post_code_country").appendChild(error);
                }
            }
        },

        hideRegisterModal() {
            console.log('CLICKED CLOSE')
            store.dispatch('toggleRegisterModal');
        }
    }

    
}