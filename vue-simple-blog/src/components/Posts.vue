<template>
<section class="posts">
	<PostCard/>
	<PostCard/>
	<PostCard/>
	<PostCard/>
	<PostCard/>
	<PostCard/>
	<PostCard/>

	<Pagination/>
</section>
</template>

<script>
import PostCard from "./PostCard";
import Pagination from "./Pagination";

export default {
  name: "Posts",
  components: {
	  PostCard,
	  Pagination
  }
};
</script>