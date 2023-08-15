import { cn } from "@/utils/component-utils";
import Icon, { IconProps } from "../Icon";

type _ArrowDownCircleProps = {};

export type ArrowDownCircleProps = _ArrowDownCircleProps &
	Omit<IconProps, keyof _ArrowDownCircleProps>;

function ArrowDownCircle({ className, ...props }: ArrowDownCircleProps) {
	return (
		<Icon className={cn(``, className)} {...props}>
			<>
				<g id="Iconly/Light/Arrow---Down-Circle">
					<g id="Arrow---Down-Circle">
						<path
							id="Stroke-1"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.750244 10C0.750244 15.108 4.89124 19.25 10.0002 19.25C15.1082 19.25 19.2502 15.108 19.2502 10C19.2502 4.892 15.1082 0.75 10.0002 0.75C4.89124 0.75 0.750244 4.892 0.750244 10Z"
							stroke="#404040"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							id="Stroke-3"
							d="M6.52905 8.55762L10.0001 12.0436L13.4711 8.55762"
							stroke="#404040"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</g>
			</>
		</Icon>
	);
}

export default ArrowDownCircle;
