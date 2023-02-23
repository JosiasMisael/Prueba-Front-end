<template>
    <h1>{{ msg }}</h1>
</template>
<script>
import { apiUrl } from '@/constants/config';
import axios from "axios";
 export default {
    props: {
    msg: String
  },
    data(){
        return{

        }
    },
    methdos:{    
    },
    mounted(){
   
       // let url =apiUrl+ "alumno/store"
       let url =apiUrl+ "seccion/get"
               axios.get(url).then(response=>{
                console.log(response.data);

                //localStorage.setItem('token', response.data.sccess_token)

               }).catch(error=>{
                 console.log(error.response.data);
               });
               
                
    }
 }
</script>