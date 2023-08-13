'use-client'

import { ComponentPropsWithRef, PropsWithChildren } from 'react';
import { cn } from '@/utils/component-utils';

type _ButtonProps = {}

export type ButtonProps = _ButtonProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<'button'>>, keyof _ButtonProps>

function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			className={cn(`px-8 py-3 bg-indigo-500
							shadow-[0px_12px_64px_0px_rgba(96,83,248,0.48)] 
							rounded-full font-extrabold`, className)}
			{...props}>
			{children}
		</button>
	);
}

export default Button;
