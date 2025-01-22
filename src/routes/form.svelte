<script lang="ts">
	import emailjs from '@emailjs/browser';
	let form: HTMLFormElement;

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		emailjs.sendForm('service_nckisme', 'template_n1cinwk', form.current, '').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
</script>

<div class="mt-10 flex flex-col items-center justify-center gap-5 md:gap-10 md:py-20">
	<p class="text-2xl font-medium">Register Now</p>

	<form
		bind:this={form}
		on:submit={sendEmail}
		class="flex w-[80%] flex-col items-center justify-center gap-5 md:max-w-[50rem] md:gap-10"
	>
		<div class="flex w-full flex-col gap-5 md:flex-row md:gap-10">
			<input
				class="formInput"
				type="text"
				placeholder="First Name*"
				name="guest_first_name"
				required
			/>
			<input
				class="formInput"
				type="text"
				placeholder="Last Name*"
				name="guest_last_name"
				required
			/>
		</div>
		<div class="flex w-full flex-col gap-5 md:flex-row md:gap-10">
			<input class="formInput" type="email" placeholder="Email*" name="guest_last_name" required />
			<input class="formInput" type="text" placeholder="Phone*" name="guest_last_name" required />
		</div>
		<button type="submit" class="uppercase\ w-fit border-b border-black font-medium tracking-wider">
			SUBMIT
		</button>
	</form>
</div>

<style>
	.formInput {
		padding: 10px;
		background-color: transparent;
		border: 1px solid;
		outline: none;
		width: 100%;
	}
</style>
