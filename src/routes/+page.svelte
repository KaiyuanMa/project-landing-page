<script lang="ts">
	import Form from './form.svelte';
	import Footer from './footer.svelte';
	import Content from './content.svelte';
	import LandingSection from './landing-section.svelte';
</script>

<div class="bg-color-bg">
	<div class="flex flex-col lg:mx-auto">
		<!-- <Header /> -->
		<LandingSection />
		<Form />
		<Content />
	</div>
	<Footer />
</div>
