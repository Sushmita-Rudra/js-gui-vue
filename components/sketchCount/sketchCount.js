const count = (x, y) => { 
    return x * y 
}

const sketchCount = new Vue({
  el: '#sketchCount',
  data: {
    yourName: 'Rudra',
    stories: 7,
    sketchesPerStory: 3
  },
  computed: {
    sketchCounter: function () {
      const i = parseInt(this.stories)
      const j = parseInt(this.sketchesPerStory)
      return `${this.yourName}, your sketches are ${count(i, j)}.`
    }
  }
})