import dynamic from "next/dynamic";
import type { ReactPlayerProps } from "react-player";
import Modal from "../Modal";
import { forwardRef } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayerModal = forwardRef<unknown, ReactPlayerProps>(
	function VideoPlayerModal(props, ref) {
		return (
			<Modal
				useCloseIcon
				className={`max-h-[184px] max-w-[328px] overflow-hidden p-0 
				sm:max-h-none sm:max-w-none 2xl:max-h-[500px] 2xl:max-w-[888px]`}
			>
				<ReactPlayer ref={ref} width={"100%"} height={"100%"} {...props} />
			</Modal>
		);
	}
);

export default VideoPlayerModal;
