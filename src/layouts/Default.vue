<template>
  <div>
    <section>
      <header>
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
      </header>
    </section>
    <section>
      <slot />
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
