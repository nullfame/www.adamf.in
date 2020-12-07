<template>
  <Layout>
    <article class="prose">
      <h1>{{ $page.content.title }}</h1>
      <div v-html="$page.content.content"></div>
    </article>
  </Layout>
</template>

<page-query>
query Content ($path: String!) {
	content (path: $path) {
    title,
    content
  }
}
</page-query>
