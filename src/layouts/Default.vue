<template>
  <div
    class="max-w-screen-sm mx-auto lg:max-w-screen-xl lg:mx-16 xl:mx-32 2xl:mx-auto lg:grid lg:grid-rows-4 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-16 lg:my-16"
  >
    <section class="col-start-1 row-start-2">Photo</section>
    <section class="col-start-1 row-start-1">
      <header
        class="font-headline font-light tracking-tight text-6xl text-right lg:break-words text-brown hover:text-dark-brown"
      >
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </header>
    </section>
    <section class="col-start-1 row-start-3">Summary</section>
    <section class="col-start-2 row-span-3">
      <slot />
    </section>
    <section class="col-start-1 col-span-2">Footer</section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
