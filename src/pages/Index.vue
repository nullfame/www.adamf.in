<template>
  <Layout>
    <div class="prose" v-html="$page.bio.content"></div>
  </Layout>
</template>

<page-query>
query {
  bio: content (path: "/bio/") {
    content,
    tagline
  },
  site: metadata {
    name: siteName
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      titleTemplate: `${this.$page.site.name} - ${this.$page.bio.tagline}`,
    };
  },
};
</script>
