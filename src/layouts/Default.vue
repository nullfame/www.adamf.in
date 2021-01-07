<template>
  <div
    class="max-w-screen-sm mx-auto lg:max-w-screen-xl lg:mx-16 xl:mx-32 2xl:mx-auto lg:grid lg:grid-rows-4 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-16 lg:my-16"
  >
    <section class="col-start-1 row-start-2 sm:px-6 sm:pt-6 md:pt-12 lg:p-0">
      <g-image
        src="~/assets/images/adamfinlayson-2019.jpg"
        width="480"
        quality="100"
        class="hidden lg:inline rounded-lg"
      />
      <g-image
        src="~/assets/images/adamfinlayson-2019-wide.jpg"
        width="640"
        quality="100"
        class="inline sm:rounded-lg lg:hidden"
      />
    </section>
    <section class="col-start-1 row-start-1">
      <header
        class="font-headline font-light tracking-tight text-6xl px-3 sm:px-6 lg:px-0 mt-8 lg:mt-0 lg:text-right lg:break-words text-brown hover:text-dark-brown"
      >
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </header>
    </section>
    <section
      class="col-start-1 row-start-3 prose prose-xl px-3 sm:px-6 lg:px-0 my-6 lg:my-0 lg:prose-lg font-body text-dark-brown"
      v-html="summary"
    ></section>
    <section
      class="col-start-2 row-span-3 px-3 sm:px-6 lg:px-0 mb-12 md:mb-24 lg:mb-0"
    >
      <slot />
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  },
  metaContent (path: "/site/") {
    id,
    title,
    tagline,
    summary
  },
}
</static-query>

<script>
const marked = require("marked");

export default {
  computed: {
    summary: function () {
      return marked(this.$static.metaContent.summary);
    },
  },
};
</script>
