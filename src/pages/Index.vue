<template>
  <Layout>
    <div
      class="prose prose-xl font-body text-dark-brown leading-loose"
      v-html="$page.bio.content"
    ></div>
    <p class="prose prose-xl font-body mt-6 text-dark-brown leading-loose">
      {{ $page.bio.updated }}
    </p>
  </Layout>
</template>

<page-query>
query {
  bio: content (path: "/home/") {
    content,
    updated
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
