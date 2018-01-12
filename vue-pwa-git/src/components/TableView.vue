<script>
export default {
  name: 'TableView',
  props: {
    onscroll: Function
  },
  render (h) {
    return h('div', {
      'ref': 'tbv',
      'style': {
        'overflow-y': 'auto',
        'height': '500px'
      },
      'class': 'tableView',
      'on': {
        scroll: this.onScroll
      }
    }, [
      h('ul', {
        'style': {
          'padding-top': '0px',
          'padding-bottom': '2344px'
        },
        'class': 'tabViewContainer'
      })
    ])
  },
  methods: {
    onScroll () {
      console.log(123)
    }
  }
  // computed: {
  //   size (str) {
  //     let c = str.length * fontSize/width
  //     let h = c % parseInt(c) !== 0 ? c + 1 : c
  //     return  h * fontSize
  //   }
  // },
}
</script>