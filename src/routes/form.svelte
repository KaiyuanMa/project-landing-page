<script lang="ts">
	import BackgroundImage from '$lib/assets/background-image.jpeg';
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

<div
	class="flex flex-col items-center justify-center gap-5 bg-rose-gold pb-10 font-extrabold text-white md:gap-10 md:py-20"
>
	<form
		bind:this={form}
		on:submit={sendEmail}
		class="flex w-[80%] flex-col items-center justify-center"
	>
		<div class="z-10 flex w-full flex-col gap-5 md:max-w-[50rem] md:gap-10">
			<h1 class="text-2xl font-medium">Register Now</h1>
			<div class="flex w-full flex-col gap-5 md:flex-row md:gap-10">
				<div>
					<label for="guest_first_name">First Name</label>
					<input class="formInput" type="text" name="guest_first_name" required />
				</div>
				<div>
					<label for="guest_last_name">Last Name</label>
					<input class="formInput" type="text" name="guest_last_name" required />
				</div>
			</div>
			<div class="flex w-full flex-col gap-5 md:flex-row md:gap-10">
				<div>
					<label for="guest_email">Email</label>
					<input class="formInput" type="email" name="guest_email" required />
				</div>
				<div>
					<label for="guest_phone_number">Phone Number</label>
					<input class="formInput" type="text" name="guest_phone_number" required />
				</div>
			</div>
			<div class="flex w-full flex-col gap-5 md:flex-row md:gap-10">
				<div>
					<label for="guest_postal_code">Postal Code</label>
					<input class="formInput" type="text" name="guest_postal_code" />
				</div>
				<div>
					<label for="guest_postal_code">How did you hear about us?*</label>
					<select class="formInput" name="hear_about_us" required>
						<option value="" class="text-gray-200" disabled selected> Please Select </option>
					</select>
				</div>

				<div>
					<label for="guest_postal_code">Are you a Realtor?*</label>
					<select class="formInput" name="is_realtor" required>
						<option value="" disabled selected>Please Select</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>

				<div>
					<label for="guest_postal_code">Are you working with a Realtor?*</label>
					<select class="formInput" name="is_working_with_realtor" required>
						<option value="" disabled selected>Please Select</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
			</div>
			<button
				type="submit"
				class="mx-auto mt-5 w-fit border-b border-white font-medium uppercase tracking-wider"
			>
				submit
			</button>
		</div>
	</form>
</div>

<style>
	.formInput {
		padding: 10px;
		background-color: transparent;
		border: 1px solid white;
		outline: none;
		width: 100%;
	}
</style>
