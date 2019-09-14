export const DialogMixin = {
  data () {
    return {
      isDialogShowing: false
    }
  },
  methods: {
    showDialog () {
      this.isDialogShowing = true
    },
    closeDialog () {
      this.isDialogShowing = false
    },
    toggleDialog () {
      this.isDialogShowing = !this.isDialogShowing
    }
  }
}
