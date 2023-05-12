<script>
import CartView from "./CartView.vue";
import { store } from "../components/store";
export default {
  name: "HomeView",
  components: { themBooks, CartView },
  data() {
    return {
      store,
      items: [
        {
          id: 1,
          name: "The Great Gatsby",
          price: 13.99,
          author: "F. Scott Fitzgerald",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780743273565_p0_v14_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
          description:
            "F. Scott Fitzgerald's novel, The Great Gatsby, follows Jay Gatsby, a man who orders his life around one desire: to be reunited with Daisy Buchanan, the love he lost five years earlier. Gatsby's quest leads him from poverty to wealth, into the arms of his beloved, and eventually to death.",
        },
        {
          id: 2,
          name: "They Both Die at the End",
          price: 9.99,
          author: "Adam Silvera",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780063278547_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
          description:
            "Discovering they have less than 24 hours to live, two young strangers embark on an adventure of a life-time, (within the confines of one day,) in this moving and unforgettable bestseller from Adam Silvera. A love story with a difference - an unforgettable tale of life, loss and making each day count.",
        },
        {
          id: 3,
          name: "The Perks of Being a Wallflower: 20th Anniversary Edition",
          price: 13.99,
          author: "Stephen Chbosky",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781982110994_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
          description:
            "Charlie is an introvert, a typical wallflower. He doesn't have many friends and loses his only friend when he commits suicide. Being the youngest guy in his family, Charlie finds it hard to uncover the mysteries his life troubles him with.",
        },
        {
          id: 4,
          name: "The Book Thief",
          price: 12.99,
          author: "Markus Zusak",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780375842207_p0_v12_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
          description:
            "The novel follows the adventures of young Liesel Meminger. By personifying Death as a tangible being who narrates the story, the novel presents a unique perspective into the world of the victims of the war. ",
        },
        {
          id: 5,
          name: "Milk and Honey",
          price: 11.99,
          author: "Rupi Kaur",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781449474256_p0_v11_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
          description:
            "Milk and Honey is a collection of poetry and prose about survival. It is about the experience of violence, abuse, love, loss, and femininity. It is split into four chapters, and each chapter serves a different purpose, deals with a different pain, heals a different heartache.",
        },
        {
          id: 6,
          name: "Little Women and Other Novels",
          price: 25.0,
          author: "Louisa May Alcott",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781435167179_p1_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          description: "",
        },
        {
          id: 7,
          name: "The Secret Life of Bees",
          price: 14.99,
          author: "Sue Monk Kidd",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780142001745_p0_v9_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
          description:
            "When Lily's fierce-hearted “stand-in mother,” Rosaleen, insults three racists in town, they escape to Tiburon, South Carolina—a town that holds the secret to her mother's past. Taken in by an eccentric trio of black beekeeping sisters, Lily finds refuge in their mesmerizing world of bees, honey, and the Black Madonna.",
        },
        {
          id: 8,
          name: "The Song of Achilles",
          price: 14.99,
          author: "Madeline Miller",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780062060624_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
          description:
            " Seduced by the promise of a glorious destiny, Achilles joins their cause. Torn between love and fear for his friend, Patroclus follows Achilles into war, little knowing that the years that follow will test everything they have learned, everything they hold dear. And that, before he is ready, he will be forced to surrender his friend to the hands of Fate.",
        },
        {
          id: 9,
          name: "If He Had Been with Me",
          price: 10.99,
          author: "Laura Nowlin",
          image:
            "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781728205489_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
          description:
            "Autumn and Finn used to be inseparable. But then something changed. Or they changed. Now, they do their best to ignore each other. Autumn has her boyfriend Jamie, and her close-knit group of friends. And Finn has become that boy at school, the one everyone wants to be around. That still doesn't stop the way Autumn feels every time she and Finn cross paths, and the growing, nagging thought that maybe things could have been different. Maybe they should be together. But come August, things will change forever. And as time passes, Autumn will be forced to confront how else life might have been different if they had never parted ways…",
        },
        {
          id: 10,
          name: "Blue Period Volume 1",
          price: 12.99,
          author: "Tsubasa Yamaguchi",
          image:
            "https://prodimage.images-bn.com/pimages/9781646511129_p0_v2_s600x595.jpg",
          description:
            "Popular guy Yatora realizes he's just going through the motions to make other people happy.  It's an effortless performance, and, ultimately a dull one. But he wanders into the art room one day, and a lone painting captures his eye, awakening him to a kind of beauty he never knew. Compelled and consumed, he dives in headfirst—and he's about to learn how savage and unforgiving art can be. He finds himself in a new passion: painting. But untethering yourself from all your past expectations is dangerous as well as thrilling.",
        },
        {
          id: 11,
          name: "i fell in love with hope",
          price: 7.58,
          author: "Lancali",
          image: "https://m.media-amazon.com/images/I/51ZnBH4OxpL.jpg",
          description:
            "Against the unforgiving landscape of a hospital, I fell in love with a mischievous, sun-eyed boy who became my only joy in that desolate place. That is what made it all the more soul-crushing when he committed suicide in front of me.",
        },
      ],
    };
  },

  props: {
    name: String,
    price: Number,
    description: String,
    image: String,
    condition: String,
  },
  computed: {
    getImage: function () {
      return this.image;
    },
  },

  methods: {
    viewProduct(item) {
      this.item = item;
      console.log(this.item);
    },
  },
};
</script>

<template>
  <div>
    <img :src="getImage" alt="" />
  </div>
  <storeInventory
    v-for="item in items"
    :name="item.name"
    :image="item.image"
    :price="item.price"
    :description="item.description"
    :condition="item.condition"
  />
</template>

<style>
.coolcard {
  background-color: aliceblue;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  font-size: 1rem;
  margin: 20px auto;
  border: 1px solid black;
  padding: 10px;
  scale: 70%;
  font-family: "Delicious Handrawn", cursive;
}

body,
html {
  margin: 0;
  padding: 0;
}

.buy {
  margin-top: 10px;
  left: 30px;
  max-height: 20px;
}
</style>
