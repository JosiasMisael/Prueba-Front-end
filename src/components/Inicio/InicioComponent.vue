
<template>
 
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Agregar nuevo alumno
  </button>

  <!-- Modal -->
  <div class="modal fade lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregar Nuevo Alumno</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">

                <div class="form-floating mb-3">
                  <input autocomplete="off" type="text" class="form-control" v-model="alumno.carnet" id="floatingInput"
                    placeholder="Carnet">
                  <label for="floatingInput">Carnet</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input autocomplete="off" type="text" class="form-control" v-model="alumno.nombre_alumno"
                    id="floatingPassword" placeholder="Nombre">
                  <label for="floatingPassword">Nombre del Alumno</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input autocomplete="off" type="text" class="form-control" v-model="alumno.nombre_padre
                  " id="floatingPassword" placeholder="Nombre del Padre">
                  <label for="floatingPassword">Nombre del Padre</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input autocomplete="off" type="text" class="form-control" v-model="alumno.nombre_madre"
                    id="floatingPassword" placeholder="Nombre de la Madre">
                  <label for="floatingPassword">Nombre de la Madre</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label for="">Grado</label>
                <select class="form-select form-select-lg mb-3" placeholder="Grado" v-model="alumno.grado_id"
                  aria-label="Default select example">
                  <option selected>Seleccione el grado</option>
                  <option v-for="grado in arrayGrado" :key="grado.id" :value="grado.id">{{ grado.nombre }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="">Sección</label>
                <select class="form-select form-select-lg mb-3" v-model="alumno.seccion_id"
                  aria-label="Default select example">
                  <option selected>Seleccione la sección</option>
                  <option v-for="seccion in arraySeccion" :key="seccion.id" :value="seccion.id">{{ seccion.seccion }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <label for="">Fecha de Nacimiento</label>
                 <datepicker v-model="alumno.fecha_nacimiento"></datepicker>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <p   @onclick="validarDatos()" class="btn btn-primary">Guardar</p>
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        </div>
      </div>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Carnet</th>
        <th scope="col">Nombre del Alumno</th>
        <th scope="col">Fecha de Nacimiento</th>
        <th scope="col">Nombre del Padre</th>
        <th scope="col">Nombre de la Madre</th>
        <th scope="col">Grado</th>
        <th scope="col">Sección</th>
        <th scope="col">Fecha de inscripcion</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="item in arrayAlumnos" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.carnet }}</td>
        <td>{{ item.nombre_alumno }}</td>
        <td>{{ item.fecha_nacimiento }}</td>
        <td>{{ item.nombre_padre }}</td>
        <td>{{ item.nombre_madre }}</td>
        <td>{{ item.grados[0].nombre }}</td>
        <td>{{ item.alumnosgrados[0].seccion.seccion }}</td>
        <td>{{ item.alumnosgrados[0].fecha_ingreso }}</td>
      </tr>

    </tbody>
  </table>
</template>
<script>
import { apiUrl } from '@/constants/config';
import axios from "axios";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: { 
    datepicker: VueDatePicker 
  },
  data() {
    return {
      arrayAlumnos: [],
      arrayGrado: [],
      arraySeccion: [],
      alumno: {
        carnet: "",
        nombre_alumno: "",
        fecha_nacimiento: "",
        nombre_padre: "",
        nombre_madre: "",
        grado_id: "",
        seccion_id: ""
      }
    }
  },
  computed:{
    
  },
  methdos: {
    validarDatos(event){
      console.log('que',event.target.tagName);
      const {carnet, fecha_nacimiento, nombre_alumno, nombre_padre, nombre_madre, grado_id, seccion_id }= this.alumno;
      console.log(`${carnet}, ${fecha_nacimiento}, ${nombre_alumno}, ${nombre_padre}, ${nombre_madre}, ${grado_id}, ${seccion_id}`);
    },
    getGrado() {
      let url = apiUrl + "grado/get"
      axios.get(url).then(response => {
        console.log(response.data);
        this.arrayGrado = response.data.ok;
        console.log(this.arrayGrado);
        //localStorage.setItem('token', response.data.sccess_token)

      }).catch(error => {
        console.log(error.response.data);
      });
    },
    getSeccion() {
      let url = apiUrl + "seccion/get"
      axios.get(url).then(response => {
        console.log(response.data);
        this.arraySeccion = response.data.ok;
        console.log(this.arraySeccion);
        //localStorage.setItem('token', response.data.sccess_token)

      }).catch(error => {
        console.log(error.response.data);
      });


    }
  },
  mounted() {

    this.$nextTick(function () {
      let url = apiUrl + "seccion/get"
      axios.get(url).then(response => {
        console.log(response.data);
        this.arraySeccion = response.data.ok;
        console.log(this.arraySeccion);
        //localStorage.setItem('token', response.data.sccess_token)

      }).catch(error => {
        console.log(error.response.data);
      });

      let url2 = apiUrl + "grado/get"
      axios.get(url2).then(response => {
        console.log(response.data);
        this.arrayGrado = response.data.ok;
        console.log(this.arrayGrado);
        //localStorage.setItem('token', response.data.sccess_token)

      }).catch(error => {
        console.log(error.response.data);
      });

    })

    // let url =apiUrl+ "alumno/store"
    let url = apiUrl + "alumno/get"
    axios.get(url).then(response => {
      console.log(response.data);
      this.arrayAlumnos = response.data.ok;
      console.log(this.arrayAlumnos);
      //localStorage.setItem('token', response.data.sccess_token)

    }).catch(error => {
      console.log(error.response.data);
    });
  },
}
</script>