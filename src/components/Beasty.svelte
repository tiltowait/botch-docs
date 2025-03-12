<script>
	let input = '';
	let justCopied = false

	$: disabled = input === ''
	$: beasty = makeBeast(input)

	function makeBeast(input) {
		let beast = ''
		if (input) {
			let trimmed = input.replace(/\s+/g, ' ').trim();
			let letters = trimmed.split('');
			let bold = false;
			let characters = [];

			letters.forEach(char => {
				if (bold) {
					characters.push(`**${char}**`);
				} else {
					characters.push(char);
				}
				bold = !bold;
			});

			beast = '*' + characters.join('') + '*';
		}
		return beast
	}

	async function toClipboard() {
		await navigator.clipboard.writeText(beasty)
		justCopied = true
		setTimeout(() => justCopied = false, 1500)
	}
</script>

<div class="row">
	<div class="col">
		<textarea bind:value={input} class="form-control border border-secondary" placeholder="Enter text to be turned into Beast thoughts, then click the copy button." rows="3"></textarea>
		<button {disabled} on:click={toClipboard} class="btn w-100" class:btn-primary={!justCopied} class:btn-success={justCopied}>
			{#if justCopied}
				<div class="spinner-border spinner-border-sm" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
				Copied!
			{:else}
				Copy to clipboard
			{/if}
		</button>
	</div>
</div>
<div class="row">
	<div class="col">
		<hr>
		{#if beasty}
			<p>{beasty}</p>
		{:else}
			<p class="text-muted"><em>Enter some text above to see a preview here.</em></p>
		{/if}
	</div>
</div>

<style>
	button {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	textarea, textarea:focus {
		color: var(--bs-text-primary);
		background-color: var(--bs-secondary-bg);
	}
</style>
