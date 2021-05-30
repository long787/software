import {WS_ADDRESS} from "../configs";

function useWebSocket(){
    const ws = new WebSocket(WS_ADDRESS);

    const init = () => {
        bindEvent();
    }

    init();

    function bindEvent(){
        ws.addEventListener('open', handleOpen, false);
        ws.addEventListener('close', handleClose, false);
        ws.addEventListener('error', handleError, false);
        ws.addEventListener('message', handleMessage, false);
    }

    function handleOpen(e){
        console.log('webSocket open', e);
    }
    function handleClose(e){
        console.log('webSocket close', e);
    }
    function handleError(e){
        console.log('webSocket error', e);
    }
    function handleMessage(e){

    }

    return ws;
}

export default useWebSocket;