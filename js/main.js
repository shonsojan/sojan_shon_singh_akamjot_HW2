import {createApp} from vue;

const app = createApp({
    data(){
        return{
            customerTotal: 0
        };
    },

    method:{
        calculateTip(percentage){
            return (this.customerTotal * percentage).toFixed(2);
            
        }
    }
}) .mount("#app");