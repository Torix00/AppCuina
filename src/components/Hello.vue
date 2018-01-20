<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
    <a href="/#/rec">Totes les receptes</a>
    </p>
    <p>   
    <a href="/#/sap">Sorpresa als pares</a>
    </p>
    <p>   
    <a href="/#/ams">Avui menjo sa</a>
    </p>
    <p>   
    <a href="/#/gds">Gaudim dels sabors</a>
    </p>
    <p>   
    <a href="/#/ufbd">Un final ben dolç</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: "No et mengis l'olla"
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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