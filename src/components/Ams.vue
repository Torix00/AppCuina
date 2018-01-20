<template>
  <div id="show-amss">
    <h1>Avui menjo sa</h1>
    <a href="/#/">Portada</a>

    <div v-for="amsa in amssa" class="single-ams">
      <h2 style="color:#29db47;">{{amsa.nombre}}</h2>
      <h4>Per a {{amsa.numpers}} persones </h4>
      <h4>Dificultat: {{amsa.dificultad}}</h4>
    <div v-for="inga in ingsa" class="single-ing">
      <li>{{inga.nombre}}</li>
    </div>
      <article>Preparació: {{amsa.prep}}</article>
    </div>

    <div v-for="amsb in amssb" class="single-ams">
      <h2 style="color:red;">{{amsb.nombre}}</h2>
      <h4>Per a {{amsb.numpers}} persones </h4>
      <h4>Dificultat: {{amsb.dificultad}}</h4>
    <div v-for="ingb in ingsb" class="single-ing">
      <li>{{ingb.nombre}}</li>
    </div>
      <article>Preparació: {{amsb.prep}}</article>
    </div>

    <div v-for="amsc in amssc" class="single-ams">
      <h2 style="color:yellow;">{{amsc.nombre}}</h2>
      <h4>Per a {{amsc.numpers}} persones </h4>
      <h4>Dificultat: {{amsc.dificultad}}</h4>
    <div v-for="ingc in ingsc" class="single-ing">
      <li>{{ingc.nombre}}</li>
    </div>
      <article>Preparació: {{amsc.prep}}</article>
    </div>

  </div>
</template>

<script> https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js </script>

<script>

export default {
  name: 'Ams',
  data () {
    return {
      amssa: [],
      amssb: [],
      amssc: [],
      ingsa: [],
      ingsb: [],
      ingsc: [],
      
    }
  },
  created() {
    this.$http.get("http://localhost:1337/receta").then(function(data){
      this.amssc = data.body.slice(2,3);
      this.amssb = data.body.slice(3,4);
      this.amssa = data.body.slice(4,5);
    })
    this.$http.get("http://localhost:1337/ingrediente").then(function(data){
      this.ingsc = data.body.slice(77,86);
      this.ingsb = data.body.slice(35,41);
      this.ingsa = data.body.slice(22,35);
    })
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-amss{
  max-width: 1400px;
  margin: 0 auto;
}
.single-ams{
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
