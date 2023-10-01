import dynamic from "next/dynamic";
import type { ReactPlayerProps } from "react-player";
import Modal from "../Modal";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoPlayerModal({ playerProps }: { playerProps: ReactPlayerProps }) {
	return (
		<Modal
			useCloseIcon
			className={`max-h-[184px] max-w-[328px] overflow-hidden p-0 
				sm:max-h-none sm:max-w-none 2xl:max-h-[500px] 2xl:max-w-[888px]`}
		>
			<ReactPlayer width={"100%"} height={"100%"} {...playerProps} />
		</Modal>
	);
}

export default VideoPlayerModal;
