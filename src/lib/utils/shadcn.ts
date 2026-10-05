import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Component, ComponentProps } from 'svelte';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type WithElementRef<T, E extends HTMLElement = HTMLElement> = T & {
	ref?: E | null;
};

export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, 'child'> : T;

export type WithoutChildrenOrChild<T> = T extends {
	children?: unknown;
	child?: unknown;
}
	? Omit<T, 'children' | 'child'>
	: T;

export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, 'children'> : T;

export type AsChild<T> = T & { asChild?: boolean };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentEvents<C extends Component<any>> = ComponentProps<C>;
