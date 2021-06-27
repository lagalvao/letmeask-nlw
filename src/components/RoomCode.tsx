import toast, { Toaster } from 'react-hot-toast';

import copyImg from '../assets/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
};

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code);
        toast('Código da sala copiado com sucesso');
    }

    return (
        <>
            <button className="room-code" onClick={copyRoomCodeToClipboard}>
                <div>
                    <img src={copyImg} alt="Copiar código" />
                </div>
                <span>Sala #{props.code}</span>
            </button>
            <Toaster />
        </>
    );
}