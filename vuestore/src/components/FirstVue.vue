<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>Essential Links</h2>
    <input type="text" v-model="title" /><br/>
    <p v-text="users.firstName"></p>
    <p v-if="showName">{{users.lastName}}</p>
    <ul>
        <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet">Say something</button>
    <input type="text" v-on:keyup="presskey" v-on:keyup.enter="enterHit" />
    <hr />

    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>

  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'Setting up store',
      users: {
        firstName: 'Mary',
        lastName: 'White'
      },
      showName: false,
      items: [
        {title: 'Title one'},
        {title: 'Title two'},
        {title: 'Title three'},
        {title: 'Title four'}
      ]
    }
  },
  methods: {
    greet: function () {
      alert('testing something')
    },
    presskey: function () {
      console.log('pressed')
    },
    enterHit: function () {
      console.log('enter hit')
    }
  },
  computed: {
    fullName: function () {
      return this.users.firstName + ' ' + this.users.lastName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
