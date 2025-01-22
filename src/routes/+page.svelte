<script lang="ts">
	import Form from './form.svelte';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Content from './content.svelte';
	import LandingSection from './landing-section.svelte';
</script>

<div class="bg-color-bg">
	<div class="flex max-w-[1500px] flex-col gap-4 px-5 lg:mx-auto">
		<Header />
		<LandingSection />
		<Form />
		<Content />
	</div>
	<Footer />
</div>
