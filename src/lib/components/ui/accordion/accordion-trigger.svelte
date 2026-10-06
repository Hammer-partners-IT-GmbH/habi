<script lang="ts">
	import { cn, type WithoutChild } from '$lib/utils/shadcn.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.TriggerProps> & {
		level?: AccordionPrimitive.HeaderProps['level'];
	} = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		data-slot="accordion-trigger"
		bind:ref
		class={cn(
			'focus-visible:ring-ring/50 focus-visible:border-ring rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-3 group/accordion-trigger relative flex w-full items-center justify-between gap-4 border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<ChevronDownIcon
			data-slot="accordion-trigger-icon"
			class="cn-accordion-trigger-icon pointer-events-none shrink-0 transition-transform"
		/>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
