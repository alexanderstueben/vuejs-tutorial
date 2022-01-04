const app = Vue.createApp({
	data() {
		return {
			url: 'https://netninja.dev',
			showBooks: true,
			books: [
				{ title: 'Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
				{ title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
				{ title: 'The finale empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true}
			],
			x: 0,
			y: 0
		}
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks
		},
		toggleFav(book) {
			book.isFav = !book.isFav
		}
		// handleEvent(event, data) {
		// 	console.log(event.type)
		// 	if(data) {
		// 		console.log(data)
		// 	} 
		// },
		// handleMousemove(event) {
		// 	this.x = event.offsetX
		// 	this.y = event.offsetY
		// }
	},
	computed: {
		filteredBooks() {
			return this.books.filter(book => book.isFav)
		}
	}
})

app.mount('#app')