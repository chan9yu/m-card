import { ComponentProps, PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import Modal from '../components/ui/Modal';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;
type ModalContextValue = {
	close: () => void;
	open: (options: ModalOptions) => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const initialModalState: ModalProps = {
	description: null,
	onButtonClick: () => {},
	open: false,
	title: null
};

export default function ModalContextProvider({ children }: PropsWithChildren) {
	const [modalState, setModalState] = useState(initialModalState);

	const close = useCallback(() => {
		setModalState(initialModalState);
	}, []);

	const open = useCallback(
		({ onButtonClick, ...options }: ModalOptions) => {
			setModalState({
				...options,
				onButtonClick: () => {
					onButtonClick && onButtonClick();
					close();
				},
				open: true
			});
		},
		[close]
	);

	const value = useMemo(() => ({ close, open }), [close, open]);

	return (
		<ModalContext.Provider value={value}>
			{children}
			{createPortal(<Modal {...modalState} />, document.body)}
		</ModalContext.Provider>
	);
}

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error('useModalContext must be used within a <ModalProvider />');
	}

	return context;
};
