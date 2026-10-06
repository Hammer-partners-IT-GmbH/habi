<script lang="ts">
	import { cn } from '$lib/utils/shadcn.js';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: AccordionPrimitive.RootProps = $props();
</script>

<AccordionPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="accordion"
	class={cn('cn-accordion flex w-full flex-col gap-2', className)}
	{...restProps}
/>
