<template>
  <div id="show-ufbd">
    <h1>Un final ben dolç</h1>
    <a href="/#/">Portada</a>

    <div v-for="ufbda in ufbdsa" class="single-ufbd">
      <h2>{{ufbda.nombre}}</h2>
      <h4>Per a {{ufbda.numpers}} persones </h4>
    <div v-for="inga in ingsa" class="single-ing">
      <li>{{inga.nombre}}</li>
    </div>
      <article>Preparació: {{ufbda.prep}}</article>
    </div>

    <div v-for="ufbdb in ufbdsb" class="single-ufbd">
      <h2>{{ufbdb.nombre}}</h2>
      <h4>Per a {{ufbdb.numpers}} persones </h4>
    <div v-for="ingb in ingsb" class="single-ing">
      <li>{{ingb.nombre}}</li>
    </div>
      <article>Preparació: {{ufbdb.prep}}</article>
    </div>

    <div v-for="ufbdc in ufbdsc" class="single-ufbd">
      <h2>{{ufbdc.nombre}}</h2>
      <h4>Per a {{ufbdc.numpers}} persones </h4>
    <div v-for="ingc in ingsc" class="single-ing">
      <li>{{ingc.nombre}}</li>
    </div>
      <article>Preparació: {{ufbdc.prep}}</article>
    </div>

  </div>
</template>

<script> https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js </script>

<script>

export default {
  name: 'Ufbd',
  data () {
    return {
      ufbdsa: [],
      ufbdsb: [],
      ufbdsc: [],
      ingsa: [],
      ingsb: [],
      ingsc: [],
      
    }
  },
  created() {
    this.$http.get("http://localhost:1337/receta").then(function(data){
      this.ufbdsc = data.body.slice(10,11);
      this.ufbdsb = data.body.slice(9,10);
      this.ufbdsa = data.body.slice(8,9);
    })
    this.$http.get("http://localhost:1337/ingrediente").then(function(data){
      this.ingsc = data.body.slice(73,77);
      this.ingsb = data.body.slice(86,92);
      this.ingsa = data.body.slice(68,73);
    })
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-ufbd{
  max-width: 1400px;
  margin: 0 auto;
}
.single-ufbd{
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
