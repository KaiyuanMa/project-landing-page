<script lang="ts">
	import logo1 from '$lib/assets/logo1.png';
	import logo2 from '$lib/assets/logo2.png';
</script>

<div class="flex items-center justify-start py-5 pt-10">
	<img alt="The project logo" src={logo1} class="h-10 object-cover" />
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<div class="mx-3 h-8 border-l border-black" />
	<img alt="The project logo" src={logo2} class="h-12 object-cover" />
</div>
