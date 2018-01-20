<template>
  <div id="show-gdss">
    <h1>Gaudim dels sabors</h1>
    <a href="/#/">Portada</a>

     <div v-for="gdsa in gdssa" class="single-gdss">
      <h2 style="color:#29db47;">{{gdsa.nombre}}</h2>
      <h4>Per a {{gdsa.numpers}} persones </h4>
      <h4>Dificultat: {{gdsa.dificultad}}</h4>
    <div v-for="inga in ingsa" class="single-ing">
      <li>{{inga.nombre}}</li>
    </div>
      <article>Preparació: {{gdsa.prep}}</article>
    </div>

    <div v-for="gdsb in gdssb" class="single-gdss">
      <h2 style="color:yellow;">{{gdsb.nombre}}</h2>
      <h4>Per a {{gdsb.numpers}} persones </h4>
      <h4>Dificultat: {{gdsb.dificultad}}</h4>
    <div v-for="ingb in ingsb" class="single-ing">
      <li>{{ingb.nombre}}</li>
    </div>
      <article>Preparació: {{gdsb.prep}}</article>
    </div>

    <div v-for="gdsc in gdssc" class="single-gdss">
      <h2 style="color:red;">{{gdsc.nombre}}</h2>
      <h4>Per a {{gdsc.numpers}} persones </h4>
      <h4>Dificultat: {{gdsc.dificultad}}</h4>
    <div v-for="ingc in ingsc" class="single-ing">
      <li>{{ingc.nombre}}</li>
    </div>
      <article>Preparació: {{gdsc.prep}}</article>
    </div>

  </div>
</template>

<script> https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js </script>

<script>

export default {
  name: 'Gds',
  data () {
    return {
      gdssa: [],
      gdssb: [],
      gdssc: [],
      ingsa: [],
      ingsb: [],
      ingsc: [],
      
    }
  },
  created() {
    this.$http.get("http://localhost:1337/receta").then(function(data){
      this.gdssc = data.body.slice(7,8);
      this.gdssb = data.body.slice(6,7);
      this.gdssa = data.body.slice(5,6);
    })
    this.$http.get("http://localhost:1337/ingrediente").then(function(data){
      this.ingsc = data.body.slice(59,68);
      this.ingsb = data.body.slice(48,59);
      this.ingsa = data.body.slice(41,48);
    })
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-gdss{
  max-width: 1400px;
  margin: 0 auto;
}
.single-gdss{
  padding: 20px;
  margin: 40px 0;
  box-sizing: border-box;
  background: #405d77;
}
h2 {
  font-weight: normal;
  }

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
