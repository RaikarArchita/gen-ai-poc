import classNames from 'classnames';
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { createStyleSet } from 'botframework-webchat';
import './fabric-icons-inline.css';
import './MinimizableWebChat.css';
import WebChat from '../WebChat/WebChat';

const MinimizableWebChat = () => {

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'Transparent'
      }),
    []
  );

  const [loaded, setLoaded] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [side, setSide] = useState('center');
  const [token, setToken] = useState();

  const handleFetchToken = useCallback(async () => {
    if (!token) {
      const res = await fetch('https://382265f2b50d45859dbfc7ca298856.a8.environment.api.powerplatform.com/powervirtualagents/botsbyschema/new_gira/directline/token?api-version=2022-03-01-preview',
        { method: 'GET' });
      const { token } = await res.json();
      setToken(token);
    }
  }, [setToken, token]);

  const handleMaximizeButtonClick = useCallback(async () => {
    setLoaded(true);
    setMinimized(false);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleMinimizeButtonClick = useCallback(() => {
    setMinimized(true);
    setNewMessage(false);
    setLoaded(false);
  }, [setMinimized, setNewMessage]);

  // const handleSwitchButtonClick = useCallback(() => {
  //   setSide(side === 'left' ? 'right' : 'left');
  // }, [setSide, side]);

  return (
    <Fragment>
      {loaded && (<div style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100VW',
        height: '100%',
        zIndex: '30',
        position: 'fixed',
        top: '0',
      }} />)}
      <div className="minimizable-web-chat">
        {minimized && (
          <button className="maximize" onClick={handleMaximizeButtonClick}>
            <span className={token ? 'ms-Icon ms-Icon--MessageFill' : 'ms-Icon ms-Icon--Message'} />
            {newMessage && <span className="ms-Icon ms-Icon--CircleShapeSolid red-dot" />}
          </button>
        )}
        {loaded && (
          <div className={classNames(side === 'left' ? 'chat-box left' : side === 'right' ?
            'chat-box right' : 'chat-box center',
            minimized ? 'hide' : '')}>
            <header>
              <div className="filler" />
              <button className="minimize" onClick={handleMinimizeButtonClick}>
                <span className="ms-Icon ms-Icon--ChromeMinimize" />
              </button>
            </header>
            <WebChat
              className="react-web-chat"
              onFetchToken={handleFetchToken}
              styleSet={styleSet}
              token={token}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MinimizableWebChat;