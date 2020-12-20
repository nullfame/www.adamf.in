<template>
  <Layout>
    <div
      class="prose prose-xl font-body text-dark-brown leading-loose"
      v-html="$page.bio.content"
    ></div>
  </Layout>
</template>

<page-query>
query {
  bio: content (path: "/home/") {
    content
  },
  site: metaContent (path: "/site/") {
    title,
    tagline,
  },
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      titleTemplate: `${this.$page.site.title} - ${this.$page.site.tagline}`,
    };
  },
};
</script>
