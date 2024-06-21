import { ref } from 'vue'

class PostService {

    posts
    
    constructor () {
        this.posts = ref([])
    }

    getPost() {
        return this.posts
    }

    async fetchAll () {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const response = await fetch(url)
            const data = await response.json()
            this.posts.value = data
        } catch (error) {
            console.log(error)
        }
    }


}
export default PostService;