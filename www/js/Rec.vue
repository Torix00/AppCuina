<template>
  <div id="show-recs">
    <h1>Receptes</h1>
    <a href="/#/">Portada</a>
    
    <div v-for="reca in recsa" class="single-rec">
      <h2>{{reca.nombre}}</h2>
      <h4>Per a {{reca.numpers}} persones </h4>
    <div v-for="inga in ingsa" class="single-ing">
      <ls>{{inga.nombre}}</ls>
    </div>
      <article>Preparació: {{reca.prep}}</article>
    </div>

    <div v-for="recb in recsb" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingb in ingsb" class="single-ing">
      <ls>{{ingb.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recc in recsc" class="single-rec">
      <h2>{{recc.nombre}}</h2>
      <h4>Per a {{recc.numpers}} persones </h4>
    <div v-for="ingc in ingsc" class="single-ing">
      <ls>{{ingc.nombre}}</ls>
    </div>
      <article>Preparació: {{recc.prep}}</article>
    </div>

    <div v-for="recb in recsd" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingd in ingsd" class="single-ing">
      <ls>{{ingd.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recse" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="inge in ingse" class="single-ing">
      <ls>{{inge.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsf" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingf in ingsf" class="single-ing">
      <ls>{{ingf.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsg" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingg in ingsg" class="single-ing">
      <ls>{{ingg.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsh" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingh in ingsh" class="single-ing">
      <ls>{{ingh.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsi" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingi in ingsi" class="single-ing">
      <ls>{{ingi.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsj" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingj in ingsj" class="single-ing">
      <ls>{{ingj.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsk" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingk in ingsk" class="single-ing">
      <ls>{{ingk.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

    <div v-for="recb in recsl" class="single-rec">
      <h2>{{recb.nombre}}</h2>
      <h4>Per a {{recb.numpers}} persones </h4>
    <div v-for="ingl in ingsl" class="single-ing">
      <ls>{{ingl.nombre}}</ls>
    </div>
      <article>Preparació: {{recb.prep}}</article>
    </div>

  </div>
</template>

<script> https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js </script>

<script>

export default {
  name: 'Rec',
  data () {
    return {
      recsa: [],
      recsb: [],
      recsc: [],
      recsd: [],
      recse: [],
      recsf: [],
      recsg: [],
      recsh: [],
      recsi: [],
      recsj: [],
      recsk: [],
      recsl: [],
      ingsa: [],
      ingsb: [],
      ingsc: [],
      ingsd: [],
      ingse: [],
      ingsf: [],
      ingsg: [],
      ingsh: [],
      ingsi: [],
      ingsj: [],
      ingsk: [],
      ingsl: [],
    }
  },
  created() {
    this.$http.get("http://localhost:1337/receta").then(function(data){
      this.recsl = data.body.slice(10,11);
      this.recsk = data.body.slice(9,10);
      this.recsj = data.body.slice(8,9);
      this.recsi = data.body.slice(7,8);
      this.recsh = data.body.slice(6,7);
      this.recsg = data.body.slice(5,6);
      this.recsf = data.body.slice(4,5);
      this.recse = data.body.slice(3,4);
      this.recsd = data.body.slice(2,3);
      this.recsc = data.body.slice(1,2);
      this.recsb = data.body.slice(0,1);
      this.recsa = data.body.slice(11,12);
    })
    this.$http.get("http://localhost:1337/ingrediente").then(function(data){
      this.ingsl = data.body.slice(73,77);
      this.ingsk = data.body.slice(86,92);
      this.ingsj = data.body.slice(68,73);
      this.ingsi = data.body.slice(59,68);
      this.ingsh = data.body.slice(48,59);
      this.ingsg = data.body.slice(41,48);
      this.ingsf = data.body.slice(77,86);
      this.ingse = data.body.slice(35,41);
      this.ingsd = data.body.slice(22,35);
      this.ingsc = data.body.slice(14,22);
      this.ingsb = data.body.slice(7,14);
      this.ingsa = data.body.slice(0,7);
    })
  }, 
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-recs{
  max-width: 1400px;
  margin: 0 auto;
}
.single-rec{
  padding: 20px;
  margin: 40px 0;
  box-sizing: border-box;
  background: #405d77;
}
h1, h2 {
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

