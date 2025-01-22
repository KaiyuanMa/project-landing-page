<script>
	import SquareFacebook from '$lib/assets/icons/square-facebook.svelte';
	import SquareInstagram from '$lib/assets/icons/square-instagram.svelte';
	import SquareXTwitter from '$lib/assets/icons/square-x-twitter.svelte';
</script>

<div class="mx-5 py-32">
	<div class="flex flex-col items-center justify-center gap-10 font-thin">
		<p class="text-center text-xl leading-10">
			20675 Eastleigh Crescent <br /> Langley, BC <br /> V3A 4C3 Canada
		</p>
		<hr class="h-[2px] w-20 bg-neutral-800" />
		<div class="flex flex-col gap-4 text-center text-xl">
			<p>info@kingdomcanada.com</p>
			<p>+1 604.276.0563</p>
			<div class="flex justify-center gap-5">
				<a class="cursor-pointer duration-200 hover:opacity-35" href=""
					><SquareFacebook class="h-6 w-6" /></a
				>
				<a class="cursor-pointer duration-200 hover:opacity-35" href=""
					><SquareXTwitter class="h-6 w-6" /></a
				>
				<a class="cursor-pointer duration-200 hover:opacity-35" href=""
					><SquareInstagram class="h-6 w-6" /></a
				>
			</div>
		</div>
		<hr class="h-[2px] w-20 bg-neutral-800" />
		<div class="flex flex-col items-center justify-center gap-0 text-sm">
			<p>EverProsper Development</p>
			<p>&</p>
			<p>Kingdom Property Investment Ltd.</p>
		</div>
	</div>
</div>
