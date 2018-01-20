<template>
  <div id="show-saps">
    <h1>Sorpresa als pares</h1>
    <a href="/#/">Portada</a>

    <div v-for="sapa in sapsa" class="single-sap">
      <h2>{{sapa.nombre}}</h2>
      <h4>Per a {{sapa.numpers}} persones </h4>
    <div v-for="inga in ingsa" class="single-ing">
      <li>{{inga.nombre}}</li>
    </div>
      <article>Preparació: {{sapa.prep}}</article>
    </div>

    <div v-for="sapb in sapsb" class="single-sap">
      <h2>{{sapb.nombre}}</h2>
      <h4>Per a {{sapb.numpers}} persones </h4>
    <div v-for="ingb in ingsb" class="single-ing">
      <li>{{ingb.nombre}}</li>
    </div>
      <article>Preparació: {{sapb.prep}}</article>
    </div>

    <div v-for="sapc in sapsc" class="single-sap">
      <h2>{{sapc.nombre}}</h2>
      <h4>Per a {{sapc.numpers}} persones </h4>
    <div v-for="ingc in ingsc" class="single-ing">
      <li>{{ingc.nombre}}</li>
    </div>
      <article>Preparació: {{sapc.prep}}</article>
    </div>

  </div>
</template>

<script> https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js </script>

<script>

export default {
  name: 'Sap',
  data () {
    return {
      sapsa: [],
      sapsb: [],
      sapsc: [],
      ingsa: [],
      ingsb: [],
      ingsc: [],   
    }
  },
  created() {
    this.$http.get("http://localhost:1337/receta").then(function(data){
      this.sapsc = data.body.slice(1,2);
      this.sapsb = data.body.slice(0,1);
      this.sapsa = data.body.slice(11,12);
    })
    this.$http.get("http://localhost:1337/ingrediente").then(function(data){
      this.ingsc = data.body.slice(14,22);
      this.ingsb = data.body.slice(7,14);
      this.ingsa = data.body.slice(0,7);
    })
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-saps{
  max-width: 1400px;
  margin: 0 auto;
}
.single-sap{
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
